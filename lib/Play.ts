
module Toffee {

	export class Play extends Phaser.State {

		logo: Phaser.Sprite

		create() {

			// Create logo
			this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'toffee')
			this.logo.anchor.setTo(0.5)
			this.logo.alpha = 0

			// Show logo
			this.add.tween(this.logo).to({ alpha: 1 }, 300).start()

		}

	}

}
