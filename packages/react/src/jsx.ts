import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Props,
	ReactElementType,
	Ref,
	ElementType
} from 'shared/ReactTypes';
const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		key,
		ref,
		type,
		props,
		__mark: 'NEW'
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const configKey in config) {
		const val = config[configKey];
		if (configKey === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (configKey === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, configKey)) {
			props[configKey] = val;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDev = (type: ElementType, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const configKey in config) {
		const val = config[configKey];
		if (configKey === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (configKey === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, configKey)) {
			props[configKey] = val;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
