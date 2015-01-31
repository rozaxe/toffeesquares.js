
module Toffee {

	export class Loader extends Phaser.State {

		preload() {

			// Game's assets
			this.load.image('toffee', 'assets/toffee.png')

		}

		create() {

			this.game.state.start('Play')

		}

	}

}
