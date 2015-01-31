
module Toffee {

	export class Boot extends Phaser.State {

		preload() {

			// Loader assets

		}

		create() {

			// How many max fingers into the making
			this.input.maxPointers = 1;

			// Run game even if not focus
			this.stage.disableVisibilityChange = true

			this.game.state.start('Loader')

		}

	}

}
