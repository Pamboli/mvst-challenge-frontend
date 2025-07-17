import { TextInputWithControl } from "./TextInputWithControl";
import { TextInput as BaseInput } from "./TextInput";

const TextInput = Object.assign(BaseInput, {
  WithControl: TextInputWithControl,
});

export { TextInput };
