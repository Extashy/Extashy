<template>
  <form class="Contact-form" action="https://formspree.io/f/moqzyowg" method="POST" autocomplete="off" @submit="submitForm">
    <div class="Form-input-container">
      <input
        v-model="name"
        class="Form-input"
        type="text"
        name="name"
        :class="{ 'Input-invalid': !nameValid }"
        placeholder="name"
      >
      <span v-if="!nameValid" class="Form-error">
        Enter your name
      </span>
    </div>
    <div class="Form-input-container">
      <input
        v-model="email"
        class="Form-input"
        type="email"
        name="email"
        :class="{ 'Input-invalid': !emailValid, 'Form-error-border': !emailValid }"
        placeholder="email"
      >
      <span v-if="!emailValid" class="Form-error">
        Enter your e-mail
      </span>
    </div>
    <div class="Form-input-container">
      <textarea
        v-model="message"
        class="Form-message"
        name="message"
        :class="{ 'Input-invalid': !messageValid }"
        placeholder="message"
      />
      <span v-if="!messageValid" class="Form-error">Enter your message</span>
    </div>
    <button class="Form-button" type="submit" :disabled="!formValid">
      SUBMIT
    </button>
  </form>
</template>

<script>
export default {
  name: 'AppForm',
  data () {
    return {
      name: '',
      email: '',
      message: '',
      nameValid: true,
      emailValid: true,
      messageValid: true
    }
  },
  computed: {
    formValid () {
      return this.nameValid && this.emailValid && this.messageValid
    }
  },
  watch: {
    name () {
      this.validateName()
    },
    email () {
      this.validateEmail()
    },
    message () {
      this.validateMessage()
    }
  },
  methods: {
    validateName () {
      const regex = /^[a-zA-Z]{2,}$/
      this.nameValid = regex.test(this.name)
    },
    validateEmail () {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      this.emailValid = regex.test(this.email)
    },
    validateMessage () {
      this.messageValid = this.message.length >= 3
    },
    submitForm () {
      if (this.formValid) {
        this.$refs['App-contact'].querySelector('form').submit()
        this.name = ''
        this.email = ''
        this.message = ''
      }
    }
  }
}
</script>

<style lang="scss">
.Contact-form {
  display: flex;
  flex-direction: column;
  min-width: 50%;

  .Form-input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    &:nth-last-child(2){
      margin-bottom: 0;
    }

    .Form-input {
      width: 100%;
      background: #d3d3d3;
      height: 55px;
      border: 1px solid #858587;
      border-radius: 4px;
      padding: 8px 0 8px 8px;
      font-size: 1.2em;

      &:focus {
        box-shadow: none;
        outline: none;
        caret-color: #4e4e50;
        user-select: none;
        font-size: 1.2em;
        color: #232323;
        user-select: text;
      }
    }

    .Input-invalid {
      border: 3px solid #950740;

      &:focus {
        border: 3px solid #950740;
      }
    }
  }

  .Form-message {
    background: #d3d3d3;
    width: 100%;
    height: 150px;
    border: 1px solid #858587;
    border-radius: 4px;
    padding: 8px 0 8px 8px;
    font-size: 1.2em;

    &:focus {
      box-shadow: none;
      outline: none;
      caret-color: #4e4e50;
      user-select: none;
      font-size: 1.2em;
      color: #232323;
      user-select: text;
      height: 150px;
    }
  }

  .Form-button {
    width: 120px;
    height: 36px;
    padding: 0 16px;
    margin-top: 30px;
    font-size: .875rem;
    font-weight: bold;
    color: #950740;
    border: 2px solid #950740;
    border-radius: 4px;
    background-color: #1a1a1d;
    cursor: pointer;

    &:hover {
      background-color: #950740;
      color: #1a1a1d;
      transition: 0.5s;
    }
  }

  .Form-error {
    color: #fff;
    font-size: 1rem;
    margin: 5px 0 0 2px;
  }

  .Input-invalid {
    border: 3px solid #950740;

    &:focus {
      border: 3px solid #950740;
    }
  }
}

@media screen and (max-width: 1024px) {
  .Contact-form {
    width: 40%;
  }
}

@media screen and (max-width: 930px) {
  .Contact-form {
    width: 100%;
    max-width: 420px;

    .Form-input-container {
      align-items: center;
    }
  }
}

@media screen and (max-width: 540px) {
  .Contact-form {
    width: 100%;
    max-width: 420px;
    margin-top: 15px;

    .Form-input-container {
      align-items: center;
      margin-bottom: 10px;

      .Form-input {
        height: 45px;
        font-size: 1em;

        &:focus {
          font-size: 1em;
        }
      }

      .Input-invalid {
        border: 2px solid #950740;

        &:focus {
          border: 2px solid #950740;
        }
      }
    }

    .Form-message {
      font-size: 1em;

      &:focus {
        font-size: 1em;
      }
    }

    .Form-button {
      width: 100px;
      margin-top: 15px;
    }

    .Form-error {
      font-size: 0.9rem;
      margin: 5px 0 0 0;
    }
  }
}

@media screen and (max-width: 380px) and (max-height: 780px) {
  .Contact-form {
    width: 100%;
    max-width: 420px;
    margin-top: 0.3em;

    .Form-input-container {
      align-items: center;
      margin-bottom: 0.2em;

      .Form-input {
        height: 35px;
        font-size: 1em;

        &:focus {
          font-size: 1em;
        }
      }

      .Input-invalid {
        border: 2px solid #950740;

        &:focus {
          border: 2px solid #950740;
        }
      }
    }

    .Form-message {
      height: 100px;
      padding: 2px 0 0 4px;
      font-size: 1em;

      &:focus {
        font-size: 1em;
        height: 100px;
      }
    }

    .Form-button {
      width: 100px;
      margin-top: 15px;
    }

    .Form-error {
      font-size: 0.8rem;
      margin: 1px 0 0 0;
    }
  }
}
</style>
