const { LinValidator, Rule } = require("../../core/lin-validator");

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [new Rule('isInt', '需要传入正整数', { min: 1 })]
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super();
    this.email = [new Rule('isEmail', '不符合Email规范')];
    this.password1 = [
      new Rule('isLength', '密码至少6个字符，最多32个字符', {
        min: 6,
        max: 32
      }),
      new Rule('matches', '密码不符合规范', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]',)
    ];
    this.password2 = this.password1;
    this.nickname = [new Rule('isLength', '昵称不符合长度规范', {
      min: 4,
      max: 32
    })]
  }

  validatePassword(vals) {
    const password1 = vals.body.password1;
    const password2 = vals.body.password2;
    if (password1 !== password2) {
      throw new Error('两个密码必须相同！')
    }
  }
}

module.exports = {
  PositiveIntegerValidator,
  RegisterValidator
}