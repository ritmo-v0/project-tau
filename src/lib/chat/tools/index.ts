// Tools
import { StepBlockTool } from "./step-block";
import { IntroduceTauTool } from "./introduce-tau";

// Types & Interfaces
import { ChatTool } from "@/types/chat";



const TOOLS: ChatTool<any, any>[] = [
	StepBlockTool,
	IntroduceTauTool,
];

export const CHAT_TOOL_CONFIGS = TOOLS.reduce((acc, tool) => {
	acc[tool.name] = tool;
	return acc;
}, {} as Record<string, ChatTool>);

export const CHAT_TOOLS = TOOLS.reduce((acc, tool) => {
	acc[tool.name] = tool.tool;
	return acc;
}, {} as Record<string, typeof TOOLS[number]["tool"]>);

export const CHAT_TOOL_NAMES = TOOLS.map(tool => tool.name);