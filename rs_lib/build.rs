use std::env;
use std::path::Path;
use std::process::Command;

fn main() {
    // Only run custom build for wasm32 target
    if env::var("TARGET").unwrap() == "wasm32-unknown-unknown" {
        // Get the output directory
        let out_dir = env::var("OUT_DIR").unwrap();

        // Navigate up to the workspace target directory
        let target_dir = Path::new(&out_dir)
            .ancestors()
            .find(|p| p.ends_with("target"))
            .expect("Couldn't find target directory");

        // Construct the path to the wasm file
        let wasm_file = target_dir
            .join("wasm32-unknown-unknown")
            .join("release")
            .join("rs_lib.wasm");

        // Create the output directory if it doesn't exist
        let output_dir = Path::new("..").join("static").join("wasm");
        std::fs::create_dir_all(&output_dir)
            .expect("Failed to create output directory");

        // Run wasm-bindgen
        let status = Command::new("wasm-bindgen")
            .args(&[
                "--out-dir",
                output_dir.to_str().unwrap(),
                "--target",
                "web",
                wasm_file.to_str().unwrap(),
            ])
            .status()
            .expect("Failed to execute wasm-bindgen");

        if !status.success() {
            panic!("wasm-bindgen failed");
        }

        println!("cargo:rerun-if-changed=src");
    }
}
