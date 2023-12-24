declare module 'react-latex'
declare module 'd3'

type Statement = {
    id: string,
    type: string,
    name?: string,
    content: string,
    short?: string,
    proof?: string,
    depending?: Array<string>,
}

type GraphNode = {
    nodeId: number,
    label: string = "",
    content: string = "",
    color: string = "blue",
    opacity: string = "200",
    type: string = "text"
};

type Terminology = {
    name: string;
    definition: string;
    prerequisites: string[];
    relevants: string[];
}
