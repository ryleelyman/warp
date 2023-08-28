use std::process::Command;
use std::path::PathBuf;

fn main() {
    println!("cargo:rerun-if-changed=../lib/weaver");
    let weaver_dir: PathBuf = ["..", "lib", "weaver"].iter().collect();
    Command::new("zig").arg(&"build")
        .current_dir(&weaver_dir)
        .status().unwrap();
    println!("cargo:rustc-link-search=../lib/weaver/zig-out/lib");
    tauri_build::build();
}
