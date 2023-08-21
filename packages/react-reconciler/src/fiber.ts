import { Props, Key, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, Noflags } from './fiberFlags';
export class FiberNode {
	tag: WorkTag;
	type: any;
	key: Key;
	stateNode: any;
	pendingProps: Props | null;
	memoizedProps: Props | null;
	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	ref: Ref;
	alternate: FiberNode | null;
	flags: Flags;
	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		this.stateNode = null; // div
		this.type = null; // funComponent ()=>{}
		// 构成树状结构
		this.return = null; // 指向父fiberNode
		this.sibling = null; // 指向兄弟fiberNode
		this.child = null; // 指向子fiberNode
		this.index = 0;
		this.ref = null;
		// 工作单元
		this.pendingProps = pendingProps;
		this.memoizedProps = null;
		this.alternate = null;
		this.flags = Noflags;
	}
}
