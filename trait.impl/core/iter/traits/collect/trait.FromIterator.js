(function() {var implementors = {
"hashbrown":[["impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Allocator,</div>"],["impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Allocator,</div>"]],
"heapless":[["impl&lt;'a, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.char.html\">char</a>&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;"],["impl&lt;'a, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;"],["impl&lt;K, V, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"heapless/struct.IndexMap.html\" title=\"struct heapless::IndexMap\">IndexMap</a>&lt;K, V, S, N&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;K, V, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"heapless/struct.LinearMap.html\" title=\"struct heapless::LinearMap\">LinearMap</a>&lt;K, V, N&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;T, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"heapless/struct.IndexSet.html\" title=\"struct heapless::IndexSet\">IndexSet</a>&lt;T, S, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.char.html\">char</a>&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;"]],
"hermit":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"hermit/fd/struct.AccessPermission.html\" title=\"struct hermit::fd::AccessPermission\">AccessPermission</a>&gt; for <a class=\"struct\" href=\"hermit/fd/struct.AccessPermission.html\" title=\"struct hermit::fd::AccessPermission\">AccessPermission</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"hermit/fd/struct.EventFlags.html\" title=\"struct hermit::fd::EventFlags\">EventFlags</a>&gt; for <a class=\"struct\" href=\"hermit/fd/struct.EventFlags.html\" title=\"struct hermit::fd::EventFlags\">EventFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"hermit/fd/struct.OpenOption.html\" title=\"struct hermit::fd::OpenOption\">OpenOption</a>&gt; for <a class=\"struct\" href=\"hermit/fd/struct.OpenOption.html\" title=\"struct hermit::fd::OpenOption\">OpenOption</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"hermit/fd/struct.PollEvent.html\" title=\"struct hermit::fd::PollEvent\">PollEvent</a>&gt; for <a class=\"struct\" href=\"hermit/fd/struct.PollEvent.html\" title=\"struct hermit::fd::PollEvent\">PollEvent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"hermit/syscalls/socket/struct.SockType.html\" title=\"struct hermit::syscalls::socket::SockType\">SockType</a>&gt; for <a class=\"struct\" href=\"hermit/syscalls/socket/struct.SockType.html\" title=\"struct hermit::syscalls::socket::SockType\">SockType</a>"]],
"pci_types":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"pci_types/struct.CommandRegister.html\" title=\"struct pci_types::CommandRegister\">CommandRegister</a>&gt; for <a class=\"struct\" href=\"pci_types/struct.CommandRegister.html\" title=\"struct pci_types::CommandRegister\">CommandRegister</a>"]],
"smallvec":[["impl&lt;A: <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]],
"smoltcp":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"smoltcp/wire/struct.NdiscNeighborFlags.html\" title=\"struct smoltcp::wire::NdiscNeighborFlags\">NeighborFlags</a>&gt; for <a class=\"struct\" href=\"smoltcp/wire/struct.NdiscNeighborFlags.html\" title=\"struct smoltcp::wire::NdiscNeighborFlags\">NeighborFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"smoltcp/wire/struct.NdiscPrefixInfoFlags.html\" title=\"struct smoltcp::wire::NdiscPrefixInfoFlags\">PrefixInfoFlags</a>&gt; for <a class=\"struct\" href=\"smoltcp/wire/struct.NdiscPrefixInfoFlags.html\" title=\"struct smoltcp::wire::NdiscPrefixInfoFlags\">PrefixInfoFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"smoltcp/wire/struct.NdiscRouterFlags.html\" title=\"struct smoltcp::wire::NdiscRouterFlags\">RouterFlags</a>&gt; for <a class=\"struct\" href=\"smoltcp/wire/struct.NdiscRouterFlags.html\" title=\"struct smoltcp::wire::NdiscRouterFlags\">RouterFlags</a>"]],
"virtio_spec":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/fs/struct.F.html\" title=\"struct virtio_spec::fs::F\">F</a>&gt; for <a class=\"struct\" href=\"virtio_spec/fs/struct.F.html\" title=\"struct virtio_spec::fs::F\">F</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/mmio/struct.InterruptStatus.html\" title=\"struct virtio_spec::mmio::InterruptStatus\">InterruptStatus</a>&gt; for <a class=\"struct\" href=\"virtio_spec/mmio/struct.InterruptStatus.html\" title=\"struct virtio_spec::mmio::InterruptStatus\">InterruptStatus</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/net/struct.F.html\" title=\"struct virtio_spec::net::F\">F</a>&gt; for <a class=\"struct\" href=\"virtio_spec/net/struct.F.html\" title=\"struct virtio_spec::net::F\">F</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/net/struct.HashType.html\" title=\"struct virtio_spec::net::HashType\">HashType</a>&gt; for <a class=\"struct\" href=\"virtio_spec/net/struct.HashType.html\" title=\"struct virtio_spec::net::HashType\">HashType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/net/struct.HdrF.html\" title=\"struct virtio_spec::net::HdrF\">HdrF</a>&gt; for <a class=\"struct\" href=\"virtio_spec/net/struct.HdrF.html\" title=\"struct virtio_spec::net::HdrF\">HdrF</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/net/struct.HdrGso.html\" title=\"struct virtio_spec::net::HdrGso\">HdrGso</a>&gt; for <a class=\"struct\" href=\"virtio_spec/net/struct.HdrGso.html\" title=\"struct virtio_spec::net::HdrGso\">HdrGso</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/net/struct.S.html\" title=\"struct virtio_spec::net::S\">S</a>&gt; for <a class=\"struct\" href=\"virtio_spec/net/struct.S.html\" title=\"struct virtio_spec::net::S\">S</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/pci/struct.IsrStatus.html\" title=\"struct virtio_spec::pci::IsrStatus\">IsrStatus</a>&gt; for <a class=\"struct\" href=\"virtio_spec/pci/struct.IsrStatus.html\" title=\"struct virtio_spec::pci::IsrStatus\">IsrStatus</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/struct.DeviceStatus.html\" title=\"struct virtio_spec::DeviceStatus\">DeviceStatus</a>&gt; for <a class=\"struct\" href=\"virtio_spec/struct.DeviceStatus.html\" title=\"struct virtio_spec::DeviceStatus\">DeviceStatus</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/struct.F.html\" title=\"struct virtio_spec::F\">F</a>&gt; for <a class=\"struct\" href=\"virtio_spec/struct.F.html\" title=\"struct virtio_spec::F\">F</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/virtq/struct.AvailF.html\" title=\"struct virtio_spec::virtq::AvailF\">AvailF</a>&gt; for <a class=\"struct\" href=\"virtio_spec/virtq/struct.AvailF.html\" title=\"struct virtio_spec::virtq::AvailF\">AvailF</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/virtq/struct.DescF.html\" title=\"struct virtio_spec::virtq::DescF\">DescF</a>&gt; for <a class=\"struct\" href=\"virtio_spec/virtq/struct.DescF.html\" title=\"struct virtio_spec::virtq::DescF\">DescF</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"virtio_spec/virtq/struct.UsedF.html\" title=\"struct virtio_spec::virtq::UsedF\">UsedF</a>&gt; for <a class=\"struct\" href=\"virtio_spec/virtq/struct.UsedF.html\" title=\"struct virtio_spec::virtq::UsedF\">UsedF</a>"]],
"x86":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits32/eflags/struct.EFlags.html\" title=\"struct x86::bits32::eflags::EFlags\">EFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits32/eflags/struct.EFlags.html\" title=\"struct x86::bits32::eflags::EFlags\">EFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits32/paging/struct.PDFlags.html\" title=\"struct x86::bits32::paging::PDFlags\">PDFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits32/paging/struct.PDFlags.html\" title=\"struct x86::bits32::paging::PDFlags\">PDFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits32/paging/struct.PTFlags.html\" title=\"struct x86::bits32::paging::PTFlags\">PTFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits32/paging/struct.PTFlags.html\" title=\"struct x86::bits32::paging::PTFlags\">PTFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PDFlags.html\" title=\"struct x86::bits64::paging::PDFlags\">PDFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PDFlags.html\" title=\"struct x86::bits64::paging::PDFlags\">PDFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PDPTFlags.html\" title=\"struct x86::bits64::paging::PDPTFlags\">PDPTFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PDPTFlags.html\" title=\"struct x86::bits64::paging::PDPTFlags\">PDPTFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PML4Flags.html\" title=\"struct x86::bits64::paging::PML4Flags\">PML4Flags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PML4Flags.html\" title=\"struct x86::bits64::paging::PML4Flags\">PML4Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PML5Flags.html\" title=\"struct x86::bits64::paging::PML5Flags\">PML5Flags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PML5Flags.html\" title=\"struct x86::bits64::paging::PML5Flags\">PML5Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PTFlags.html\" title=\"struct x86::bits64::paging::PTFlags\">PTFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PTFlags.html\" title=\"struct x86::bits64::paging::PTFlags\">PTFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/bits64/rflags/struct.RFlags.html\" title=\"struct x86::bits64::rflags::RFlags\">RFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/rflags/struct.RFlags.html\" title=\"struct x86::bits64::rflags::RFlags\">RFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/controlregs/struct.Cr0.html\" title=\"struct x86::controlregs::Cr0\">Cr0</a>&gt; for <a class=\"struct\" href=\"x86/controlregs/struct.Cr0.html\" title=\"struct x86::controlregs::Cr0\">Cr0</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/controlregs/struct.Cr4.html\" title=\"struct x86::controlregs::Cr4\">Cr4</a>&gt; for <a class=\"struct\" href=\"x86/controlregs/struct.Cr4.html\" title=\"struct x86::controlregs::Cr4\">Cr4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/controlregs/struct.Xcr0.html\" title=\"struct x86::controlregs::Xcr0\">Xcr0</a>&gt; for <a class=\"struct\" href=\"x86/controlregs/struct.Xcr0.html\" title=\"struct x86::controlregs::Xcr0\">Xcr0</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/debugregs/struct.Dr6.html\" title=\"struct x86::debugregs::Dr6\">Dr6</a>&gt; for <a class=\"struct\" href=\"x86/debugregs/struct.Dr6.html\" title=\"struct x86::debugregs::Dr6\">Dr6</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/irq/struct.PageFaultError.html\" title=\"struct x86::irq::PageFaultError\">PageFaultError</a>&gt; for <a class=\"struct\" href=\"x86/irq/struct.PageFaultError.html\" title=\"struct x86::irq::PageFaultError\">PageFaultError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/segmentation/struct.SegmentSelector.html\" title=\"struct x86::segmentation::SegmentSelector\">SegmentSelector</a>&gt; for <a class=\"struct\" href=\"x86/segmentation/struct.SegmentSelector.html\" title=\"struct x86::segmentation::SegmentSelector\">SegmentSelector</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.EntryControls.html\" title=\"struct x86::vmx::vmcs::control::EntryControls\">EntryControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.EntryControls.html\" title=\"struct x86::vmx::vmcs::control::EntryControls\">EntryControls</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.ExitControls.html\" title=\"struct x86::vmx::vmcs::control::ExitControls\">ExitControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.ExitControls.html\" title=\"struct x86::vmx::vmcs::control::ExitControls\">ExitControls</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PinbasedControls.html\" title=\"struct x86::vmx::vmcs::control::PinbasedControls\">PinbasedControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PinbasedControls.html\" title=\"struct x86::vmx::vmcs::control::PinbasedControls\">PinbasedControls</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PrimaryControls.html\" title=\"struct x86::vmx::vmcs::control::PrimaryControls\">PrimaryControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PrimaryControls.html\" title=\"struct x86::vmx::vmcs::control::PrimaryControls\">PrimaryControls</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.SecondaryControls.html\" title=\"struct x86::vmx::vmcs::control::SecondaryControls\">SecondaryControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.SecondaryControls.html\" title=\"struct x86::vmx::vmcs::control::SecondaryControls\">SecondaryControls</a>"]],
"x86_64":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr0Flags.html\" title=\"struct x86_64::registers::control::Cr0Flags\">Cr0Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr0Flags.html\" title=\"struct x86_64::registers::control::Cr0Flags\">Cr0Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr3Flags.html\" title=\"struct x86_64::registers::control::Cr3Flags\">Cr3Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr3Flags.html\" title=\"struct x86_64::registers::control::Cr3Flags\">Cr3Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr4Flags.html\" title=\"struct x86_64::registers::control::Cr4Flags\">Cr4Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr4Flags.html\" title=\"struct x86_64::registers::control::Cr4Flags\">Cr4Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr6Flags.html\" title=\"struct x86_64::registers::debug::Dr6Flags\">Dr6Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr6Flags.html\" title=\"struct x86_64::registers::debug::Dr6Flags\">Dr6Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr7Flags.html\" title=\"struct x86_64::registers::debug::Dr7Flags\">Dr7Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr7Flags.html\" title=\"struct x86_64::registers::debug::Dr7Flags\">Dr7Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/model_specific/struct.CetFlags.html\" title=\"struct x86_64::registers::model_specific::CetFlags\">CetFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.CetFlags.html\" title=\"struct x86_64::registers::model_specific::CetFlags\">CetFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/model_specific/struct.EferFlags.html\" title=\"struct x86_64::registers::model_specific::EferFlags\">EferFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.EferFlags.html\" title=\"struct x86_64::registers::model_specific::EferFlags\">EferFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/mxcsr/struct.MxCsr.html\" title=\"struct x86_64::registers::mxcsr::MxCsr\">MxCsr</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/mxcsr/struct.MxCsr.html\" title=\"struct x86_64::registers::mxcsr::MxCsr\">MxCsr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/rflags/struct.RFlags.html\" title=\"struct x86_64::registers::rflags::RFlags\">RFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/rflags/struct.RFlags.html\" title=\"struct x86_64::registers::rflags::RFlags\">RFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/registers/xcontrol/struct.XCr0Flags.html\" title=\"struct x86_64::registers::xcontrol::XCr0Flags\">XCr0Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/xcontrol/struct.XCr0Flags.html\" title=\"struct x86_64::registers::xcontrol::XCr0Flags\">XCr0Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/structures/gdt/struct.DescriptorFlags.html\" title=\"struct x86_64::structures::gdt::DescriptorFlags\">DescriptorFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/gdt/struct.DescriptorFlags.html\" title=\"struct x86_64::structures::gdt::DescriptorFlags\">DescriptorFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/structures/idt/struct.PageFaultErrorCode.html\" title=\"struct x86_64::structures::idt::PageFaultErrorCode\">PageFaultErrorCode</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/idt/struct.PageFaultErrorCode.html\" title=\"struct x86_64::structures::idt::PageFaultErrorCode\">PageFaultErrorCode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableFlags.html\" title=\"struct x86_64::structures::paging::page_table::PageTableFlags\">PageTableFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableFlags.html\" title=\"struct x86_64::structures::paging::page_table::PageTableFlags\">PageTableFlags</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()