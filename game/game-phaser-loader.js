/**
 * Unified Phaser Game Asset Loader
 * This handles centralized asset loading and game initialization
 */

class GameAssets {
  static paths = {
    // Sprites and images
    paddle: 'assets/bat.svg',
    ball: 'assets/ball.png',
    brick: 'assets/brick.png',
    
    // Backgrounds
    bg: 'assets/SpaceBackground/BackgroundGenerator/stars.png',
    bgFlappy: 'assets/SpaceBackground/BackgroundGenerator/stars.png',
    
    // UI elements
    button: 'assets/SpaceBackground/GUI/transparent.png',
    
    // Audio
    blip: 'assets/audio/blip.wav',
    hit: 'assets/audio/hit.wav',
    win: 'assets/audio/win.wav',
    lose: 'assets/audio/lose.wav'
  };

  static createTextures(scene) {
    // Generate basic shapes as textures for games
    // Circle (ball) texture
    const ballGraphics = scene.make.graphics({x: 0, y: 0, add: false});
    ballGraphics.fillStyle(0x00E15C, 1);
    ballGraphics.fillCircle(8, 8, 8);
    ballGraphics.generateTexture('ball', 16, 16);
    
    // Brick texture if not loaded
    const brickGraphics = scene.make.graphics({x: 0, y: 0, add: false});
    brickGraphics.fillStyle(0xf6ad55, 1);
    brickGraphics.fillRect(0, 0, 40, 15);
    brickGraphics.generateTexture('brick', 40, 15);
  }
  
  static initPhaser(config) {
    // Default configuration with our standard settings
    const defaultConfig = {
      type: Phaser.AUTO,
      width: 400,
      height: 300,
      parent: 'game-container',
      backgroundColor: '#2d3748',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
    };
    
    // Merge configs
    const gameConfig = {...defaultConfig, ...config};
    
    // Create the game instance
    return new Phaser.Game(gameConfig);
  }
}

// Sound manager helper
class SoundFX {
  constructor(scene) {
    this.scene = scene;
    this.sounds = {};
    this.enabled = true;
  }
  
  preload() {
    // Preload common sounds
    this.scene.load.audio('blip', GameAssets.paths.blip);
    this.scene.load.audio('hit', GameAssets.paths.hit);
    this.scene.load.audio('win', GameAssets.paths.win);
    this.scene.load.audio('lose', GameAssets.paths.lose);
  }
  
  create() {
    // Create sound objects
    this.sounds = {
      blip: this.scene.sound.add('blip'),
      hit: this.scene.sound.add('hit'),
      win: this.scene.sound.add('win'),
      lose: this.scene.sound.add('lose')
    };
  }
  
  play(key, config = {}) {
    if (this.enabled && this.sounds[key]) {
      this.sounds[key].play(config);
    }
  }
  
  setEnabled(enabled) {
    this.enabled = enabled;
  }
}
