const std = @import("std");
const testing = std.testing;

export fn _add(a: i32, b: i32) i32 {
    return a + b;
}

test "basic add functionality" {
    try testing.expect(_add(3, 7) == 10);
}
