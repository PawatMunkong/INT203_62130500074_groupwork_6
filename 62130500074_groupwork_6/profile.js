const constraints = {
    firstname: {
        presence: {
            message: "is required"
        }
    },
   
    password: {
        presence: {
            message: "is required"
        }
    },
    email: {
        presence: {
            message: "is required"
        },
        email: true
    },
    full: {
        presence: {
            message: "is required"
        }
    },
    description: {
        presence: {
            message: "is required"
        }
    }
}


const app = Vue.createApp({
    data() {
        return {
            image: "./images/rew.png",
            firstname: null,
            email: null,
            password: null,
            full: null,
            description: null,
            errors: null,
        }

    },

    methods: {
        checkForm(e) {
            this.errors = validate({
                    firstname: this.firstname,
                    email: this.email,
                    password: this.password,
                    full: this.full,
                    description: this.description
                },
                constraints)
            if (this.errors) {
                e.preventDefault();
            }
            if (!this.errors) {
                alert("Your profile is updated successfully.")
            }


        }
    }
})

app.mount('#app')
