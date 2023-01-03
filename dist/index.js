"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const child_process_1 = require("child_process");
const process_1 = require("process");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const retryCountInput = (0, core_1.getInput)('retry-count');
        var retryCount = 5;
        if (Number.isInteger(retryCountInput)) {
            retryCount = Number.parseInt(retryCountInput);
        }
        const command = (0, core_1.getInput)('command');
        for (var i = 0; i < retryCount; i++) {
            try {
                (0, child_process_1.execSync)(command, { stdio: 'inherit' });
                console.info("command executed successfully, no need to retry");
                break;
            }
            catch (error) {
                console.error(error);
                if (i == retryCount - 1) {
                    console.error("failed to execute command after " + retryCount + " retries");
                    (0, process_1.exit)(1);
                }
                console.info("failed to execute command, retrying with attempt " + i + 1 + "/" + retryCount + "...");
            }
        }
    });
}
run();
//# sourceMappingURL=index.js.map