use bevy::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn run_bevy_app() {
    let mut app = App::new();

    app.add_plugins(DefaultPlugins.set(WindowPlugin {
        primary_window: Some(Window {
            resolution: (400.0, 400.0).into(),
            canvas: Some("#bevy-canvas".to_string()),
            ..default()
        }),
        ..default()
    }));

    // Add your Bevy systems and components here
    app.add_systems(Startup, setup);

    // Run the app
    app.run();
}

fn setup(mut commands: Commands) {
    // Add a 2D camera
    commands.spawn(Camera2dBundle::default());

    // Add a big red circle
    commands.spawn(SpriteBundle {
        sprite: Sprite {
            color: Color::srgb(1.0, 0.0, 0.0),
            custom_size: Some(Vec2::new(200.0, 200.0)),
            ..default()
        },
        transform: Transform::from_translation(Vec3::new(0.0, 0.0, 0.0)),
        ..default()
    });
}
