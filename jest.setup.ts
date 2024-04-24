import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { TextDecoder, TextEncoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;
