import { checkLength } from "../utils/utils";

enum ValidationMessages {
  name = "Латиница или кириллица, дефис, первая буква должна быть заглавной",
  login = "От 3 до 20 символов, допустимые символы: латиница, цифры, -_",
  password = "От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра",
  email = "Неверный формат",
  phone = "От 10 до 15 цифр, может начинается с плюса",
  required = "Обязательное поле",
}

export type ValidationRule = keyof typeof ValidationMessages;

class Validator {
  validationRules = {
    name: (value: string) => /^[A-ZА-Я][a-zа-я-]*$/.test(value),
    login: (value: string) =>
      /^[A-Za-z\d-_]*[A-Za-z-_]+[A-Za-z\d-_]*$/.test(value) &&
      checkLength(value, 3, 20),
    // https://learn.javascript.ru/regexp-groups
    email: (value: string) => /^[-.\w]+@([\w-]+\.)+[\w-]+$/.test(value),
    password: (value: string) =>
      /(?=.*[A-Z])(?=.*\d)/.test(value) && checkLength(value, 8, 40),
    phone: (value: string) => /^\+?\d{10,15}$/.test(value),
    required: (value: string) => value.length > 0,
  };

  validate(rule: ValidationRule, value: string) {
    return this.validationRules[rule](value) ? "" : ValidationMessages[rule];
  }
}

export default function validate(
  rule: ValidationRule | undefined,
  value: string
) {
  if (!rule) return "";
  return new Validator().validate(rule, value);
}
