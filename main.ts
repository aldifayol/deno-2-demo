import { mutiplyWords } from './utils/multiply-words.ts';

if (import.meta.main) {
  const multipliedWords = mutiplyWords(Deno.args[0].trim(), Number.parseInt(Deno.args[1].trim()));
  console.log(multipliedWords);
}
