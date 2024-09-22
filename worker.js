importScripts('./pkg/wasm_loremaster.js');

const {try_read_sqpack, search, get_context} = wasm_bindgen;

async function run_in_worker() {
    await wasm_bindgen('./pkg/wasm_loremaster_bg.wasm');
    console.log("worker loaded wasm");

    postMessage({
        type: "loaded",
        status: true,
    });
}

run_in_worker();

onmessage = async function(e) {
    switch (e.data.type) {
        case "setup":
            {
                let numSheets = await try_read_sqpack(
                    e.data.file_dat,
                    e.data.file_index1,
                    e.data.file_index2,
                    e.data.file_ver
                );

                postMessage({
                    type: "setup",
                    status: true,
                    numSheets: numSheets,
                });
            }
            break;

        case "dosearch":
            {
                // measure execution time in ms
                const start = performance.now();
                let search_res = await search(e.data.search, e.data.language);
                const end = performance.now();
                console.log(`we took ${end - start} ms for '${e.data.search}'`);
                postMessage({
                    type: "search",
                    search: e.data.search,
                    results: JSON.parse(search_res),
                    duration: end - start,
                });
            }
            break;

        case "context":
            {
                const start = performance.now();
                let context_res = await get_context(
                    e.data.sheet,
                    e.data.row,
                    e.data.context_len,
                    e.data.field_idx
                );
                const end = performance.now();
                console.log(`we took ${end - start} ms for context`);
                
                postMessage({
                    type: "context",
                    sheet: e.data.sheet,
                    row: e.data.row,
                    context: JSON.parse(context_res),
                    duration: end - start,
                });
            }
            break;
    }
};
