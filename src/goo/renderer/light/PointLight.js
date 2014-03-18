define([
	'goo/renderer/light/Light'
	],
/** @lends */
	function (
	Light
	) {
	'use strict';

	/**
	 * @class A omni-directional source of light. So far it has the same effect as {@link Light}
	 * @constructor
	 * @extends Light
	 * @param {Vector3} [color=(1, 1, 1)] The color of the light
	 */
	function PointLight(color) {
		Light.call(this, color);

		/**
		 * The range of the light (default is 1000)
		 * @type {number}
		 */
		this.range = 1000;
	}

	PointLight.prototype = Object.create(Light.prototype);
	PointLight.prototype.constructor = PointLight;

	/**
	 * Updates the light's translation
	 * @private
	 * @param {Transform} transform
	 */
	PointLight.prototype.update = function (transform) {
		transform.matrix.getTranslation(this.translation);
	};

	return PointLight;
});