define(
	[
		'goo/logic/LogicLayer',
		'goo/logic/LogicNode',
		'goo/logic/LogicNodes',
		'goo/logic/LogicInterface',
		'goo/math/Vector3'
	],
	/** @lends */
	function(LogicLayer, LogicNode, LogicNodes, LogicInterface, Vector3) {
		"use strict";

		/**
		 * @class Logic node that calculates sine
		 */
		function LogicNodeOutput() {
			LogicNode.call(this);
			this.logicInterface = LogicNodeOutput.logicInterface;
			this.type = "LogicNodeOutput";
			this.realOutport = null;
		}

		LogicNodeOutput.prototype = Object.create(LogicNode.prototype);
		LogicNodeOutput.editorName = "Output";

		LogicNodeOutput.prototype.onInputChanged = function(instDesc, portID, value) {
			LogicLayer.writeValueToLayerOutput(this.logicInstance, this.realOutport, value);
		};

		LogicNodeOutput.prototype.onEvent = function(portID) {

		};

		// Configure new output.
		LogicNode.prototype.onConfigure = function(newConfig) {
			this.realOutport = LogicInterface.createDynamicOutput(newConfig.config.Name);
		};

		LogicNodes.registerType("LogicNodeOutput", LogicNodeOutput);

		LogicNodeOutput.logicInterface = new LogicInterface();
		LogicNodeOutput.inportOutput = LogicNodeOutput.logicInterface.addInputProperty("Output", "any");
		LogicNodeOutput.logicInterface.addConfigEntry({name: 'Name', type: 'string', label: 'Name'});
		return LogicNodeOutput;
	}
);
