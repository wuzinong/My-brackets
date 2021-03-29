/**
 * innerHTML property for SVGElement
 * Copyright(c) 2010, Jeff Schiller
 *
 * Licensed under the Apache License, Version 2
 *
 * Works in a SVG document in Chrome 6+, Safari 5+, Firefox 4+ and IE9+.
 * Works in a HTML5 document in Chrome 7+, Firefox 4+ and IE9+.
 * Does not work in Opera since it doesn't support the SVGElement interface yet.
 *
 * I haven't decided on the best name for this property - thus the duplication.
 */

const serializeXML = (node: any, output: string[]) => {
	const nodeType = node.nodeType;
	if (nodeType === 3) {
		// TEXT nodes.
		// Replace special XML characters with their entities.
		output.push(node.textContent.replace(/&/, '&amp;').replace(/</, '&lt;').replace('>', '&gt;'));
	} else if (nodeType === 1) {
		// ELEMENT nodes.
		// Serialize Element nodes.
		output.push('<', node.tagName);
		if (node.hasAttributes()) {
			const attrMap = node.attributes;
			for (let i = 0, len = attrMap.length; i < len; ++i) {
				const attrNode = attrMap.item(i);
				output.push(' ', attrNode.name, "='", attrNode.value, "'");
			}
		}
		if (node.hasChildNodes()) {
			output.push('>');
			const childNodes = node.childNodes;
			for (let i = 0, len = childNodes.length; i < len; ++i) {
				serializeXML(childNodes.item(i), output);
			}
			output.push('</', node.tagName, '>');
		} else {
			output.push('/>');
		}
	} else if (nodeType === 8) {
		// TODO(codedread): Replace special characters with XML entities?
		output.push('<!--', node.nodeValue, '-->');
	} else {
		// TODO: Handle CDATA nodes.
		// TODO: Handle ENTITY nodes.
		// TODO: Handle DOCUMENT nodes.
		throw new Error('Error serializing XML. Unhandled node of type: ' + nodeType);
	}
};

/**
 * Extracts the content of an svg node as text or replaces it with new svg content.
 * @param svgNode The svg node to extract content from.
 * @param newContent Optional new content to insert. If provided will replace all content of the svg node with this content. If used the function returns nothing.
 */
export const innerSVG = (svgNode: SVGElement): string => {
	const output: string[] = [];
	let childNode = svgNode.firstChild as Node;
	while (childNode) {
		serializeXML(childNode, output);
		childNode = childNode.nextSibling!;
	}
	return output.join('');
};
export default innerSVG;
