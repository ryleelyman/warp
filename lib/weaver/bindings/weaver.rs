#[link(name = "weaver")]

extern "C" {
   fn _add(a: i32, b: i32) -> i32;
}

pub fn add(a: i32, b: i32) -> i32 {
    unsafe { _add(a, b) }
}
