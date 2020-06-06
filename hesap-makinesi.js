module.exports = function(RED) {
    function HesapMakinesiNode(config) {
        RED.nodes.createNode(this, config);

        var node = this;
        node.on('input', function(msg) {

			try {
				const x = 3.14;

				var msg1 = {}, msg2 = {}, msg3 = {}, msg4 = {};

	            msg1.payload = Number(msg.sayi1) + Number(msg.sayi2);
				msg2.payload = Number(msg.sayi1) - Number(msg.sayi2);
				msg3.payload = Number(msg.sayi1) * Number(msg.sayi2);
				msg4.payload = Number(msg.sayi1) / Number(msg.sayi2);

				x = 6.62;

			} catch (error) {
				node.status( {fill:"red", shape:"dot", text:"Sabite deger atama hatası!"} );
				node.error("Debug Panel: Sabite deger atama hatasi!");
				throw(error);

			} finally {
	            node.send([msg1, msg2, msg3, msg4]);
			}
        });
    }
    RED.nodes.registerType("hesap-makinesi", HesapMakinesiNode);
}
