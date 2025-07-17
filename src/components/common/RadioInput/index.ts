import { RadioInput as Base } from "./RadioInput";
import { RadioInputWithControl } from "./RadioInputWithControl";

const RadioInput = Object.assign(Base, {
  WithControl: RadioInputWithControl,
});

export { RadioInput };
