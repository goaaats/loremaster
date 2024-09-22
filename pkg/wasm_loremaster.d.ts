declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	*/
	export function greet(): void;
	/**
	*/
	export function test_log(): void;
	/**
	* Reads one byte from the file at a given offset. Returns the read byte or 0 if the file is empty
	* See also https://github.com/Badel2/wasm-bindgen-file-reader-test
	* @param {File} file
	* @param {bigint} offset
	* @returns {number}
	*/
	export function read_at_offset_sync(file: File, offset: bigint): number;
	/**
	* @param {File} a_dat
	* @param {File} a_index
	* @param {File} a_index2
	* @param {File} ffxivgame_ver
	* @returns {number}
	*/
	export function try_read_sqpack(a_dat: File, a_index: File, a_index2: File, ffxivgame_ver: File): number;
	/**
	* @param {string} search
	* @returns {string}
	*/
	export function search(search: string): string;
	/**
	* @param {string} sheet_name
	* @param {number} row_id
	* @param {number} context_len
	* @param {number} field_idx
	* @returns {string}
	*/
	export function get_context(sheet_name: string, row_id: number, context_len: number, field_idx: number): string;
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly greet: () => void;
  readonly test_log: () => void;
  readonly read_at_offset_sync: (a: number, b: number) => number;
  readonly try_read_sqpack: (a: number, b: number, c: number, d: number) => number;
  readonly search: (a: number, b: number, c: number) => void;
  readonly get_context: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
