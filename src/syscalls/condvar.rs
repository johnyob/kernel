// The implementation is inspired by Andrew D. Birrell's paper
// "Implementing Condition Variables with Semaphores"

use alloc::boxed::Box;
use core::sync::atomic::{AtomicIsize, Ordering};
use core::{mem, ptr};

use crate::synch::semaphore::Semaphore;

struct CondQueue {
	counter: AtomicIsize,
	sem1: Semaphore,
	sem2: Semaphore,
}

impl CondQueue {
	pub fn new() -> Self {
		CondQueue {
			counter: AtomicIsize::new(0),
			sem1: Semaphore::new(0),
			sem2: Semaphore::new(0),
		}
	}
}

unsafe extern "C" fn __sys_destroy_queue(ptr: usize) -> i32 {
	unsafe {
		let id = ptr::from_exposed_addr_mut::<usize>(ptr);
		if id.is_null() {
			debug!("sys_wait: invalid address to condition variable");
			return -1;
		}

		if *id != 0 {
			let cond = Box::from_raw(ptr::from_exposed_addr_mut::<CondQueue>(*id));
			mem::drop(cond);
		}

		0
	}
}

#[no_mangle]
pub unsafe extern "C" fn sys_destroy_queue(ptr: usize) -> i32 {
	unsafe { kernel_function!(__sys_destroy_queue(ptr)) }
}

unsafe extern "C" fn __sys_notify(ptr: usize, count: i32) -> i32 {
	unsafe {
		let id = ptr::from_exposed_addr::<usize>(ptr);

		if id.is_null() {
			// invalid argument
			debug!("sys_notify: invalid address to condition variable");
			return -1;
		}

		if *id == 0 {
			debug!("sys_notify: invalid reference to condition variable");
			return -1;
		}

		let cond = &mut *(ptr::from_exposed_addr_mut::<CondQueue>(*id));

		if count < 0 {
			// Wake up all task that has been waiting for this condition variable
			while cond.counter.load(Ordering::SeqCst) > 0 {
				cond.counter.fetch_sub(1, Ordering::SeqCst);
				cond.sem1.release();
				cond.sem2.acquire(None);
			}
		} else {
			for _ in 0..count {
				cond.counter.fetch_sub(1, Ordering::SeqCst);
				cond.sem1.release();
				cond.sem2.acquire(None);
			}
		}

		0
	}
}

#[no_mangle]
pub unsafe extern "C" fn sys_notify(ptr: usize, count: i32) -> i32 {
	unsafe { kernel_function!(__sys_notify(ptr, count)) }
}

unsafe extern "C" fn __sys_init_queue(ptr: usize) -> i32 {
	unsafe {
		let id = ptr::from_exposed_addr_mut::<usize>(ptr);
		if id.is_null() {
			debug!("sys_init_queue: invalid address to condition variable");
			return -1;
		}

		if *id == 0 {
			debug!("Create condition variable queue");
			let queue = Box::new(CondQueue::new());
			*id = Box::into_raw(queue) as usize;
		}

		0
	}
}

#[no_mangle]
pub unsafe extern "C" fn sys_init_queue(ptr: usize) -> i32 {
	unsafe { kernel_function!(__sys_init_queue(ptr)) }
}

unsafe extern "C" fn __sys_add_queue(ptr: usize, timeout_ns: i64) -> i32 {
	unsafe {
		let id = ptr::from_exposed_addr_mut::<usize>(ptr);
		if id.is_null() {
			debug!("sys_add_queue: invalid address to condition variable");
			return -1;
		}

		if *id == 0 {
			debug!("Create condition variable queue");
			let queue = Box::new(CondQueue::new());
			*id = Box::into_raw(queue) as usize;
		}

		if timeout_ns <= 0 {
			let cond = &mut *(ptr::from_exposed_addr_mut::<CondQueue>(*id));
			cond.counter.fetch_add(1, Ordering::SeqCst);

			0
		} else {
			error!("Conditional variables with timeout is currently not supported");

			-1
		}
	}
}

#[no_mangle]
pub unsafe extern "C" fn sys_add_queue(ptr: usize, timeout_ns: i64) -> i32 {
	unsafe { kernel_function!(__sys_add_queue(ptr, timeout_ns)) }
}

unsafe extern "C" fn __sys_wait(ptr: usize) -> i32 {
	unsafe {
		let id = ptr::from_exposed_addr_mut::<usize>(ptr);
		if id.is_null() {
			debug!("sys_wait: invalid address to condition variable");
			return -1;
		}

		if *id == 0 {
			error!("sys_wait: Unable to determine condition variable");
			return -1;
		}

		let cond = &mut *(ptr::from_exposed_addr_mut::<CondQueue>(*id));
		cond.sem1.acquire(None);
		cond.sem2.release();

		0
	}
}

#[no_mangle]
pub unsafe extern "C" fn sys_wait(ptr: usize) -> i32 {
	unsafe { kernel_function!(__sys_wait(ptr)) }
}
