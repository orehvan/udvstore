import { RpcProcedure } from '../../rpc';
import { FilesChange } from '../FilesChange';
import { Issue } from '../../issue';
import { Dependencies } from '../Dependencies';
declare const configure: RpcProcedure<object, void>;
declare const getReport: RpcProcedure<FilesChange, void>;
declare const getDependencies: RpcProcedure<void, Dependencies>;
declare const getIssues: RpcProcedure<void, Issue[]>;
declare const closeReport: RpcProcedure<void, void>;
export { configure, getReport, getDependencies, getIssues, closeReport };
