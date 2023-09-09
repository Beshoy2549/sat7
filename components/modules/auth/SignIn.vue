<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import AuthServices from "@/services/auth/auth"
import { useRouter } from 'vue-router';
import FormInputText from "@/components/partials/InputText.vue"
import ErrorAlart from "@/components/partials/Alart.vue"

const dynamicForm = ref<any>(null)

// Define the types for your data
interface FormData {
    email: string;
    password: string;
}

// Define the reactive variables and types
const router = useRouter();
const store = useAuthStore();
const isLoading = ref(false);
const error = ref("");

const formData = reactive<FormData>({
    email: '',
    password: '',
});


// Define the login function
const login = () => {
    isLoading.value = true;
    let payload = {
        device_os: "Mac OSX",
        device_type: "browser",
        "email": formData.email,
        "password": formData.password,
        uniq_device_id: "5yovprzyvffcrgnf3tn7bm3txrlma53owg"
    };

    AuthServices.loginService(payload)
        .then((response) => {
            store.setAuthUser(response.data);
            isLoading.value = false;
            router.push('/');
        })
        .catch((err) => {
            isLoading.value = false;
            error.value = err.response.data.message
        });
};

async function submitForm() {
    await dynamicForm.value.validate().then((form: any) => {
        if (form.valid) {
            login()
        }
    })
}

</script>

<template>
    <section class="sign-in">
        <VeeForm ref="dynamicForm" @submit="submitForm()"
            class="login-form mx-auto flex w-full flex-col rounded-lg  p-8 shadow-lg  md:w-1/2 lg:w-2/6">
            <ErrorAlart :error="error" v-if="error" />
            <h2 class="mb-5 text-lg font-medium">Log In</h2>
            <div class=" mb-4">
                <FormInputText v-model="formData.email" label="Email" name="email" rules="required|email">
                </FormInputText>
            </div>
            <div class=" mb-4">
                <FormInputText v-model="formData.password" label="Password" name="password" rules="required|min:6"
                    type="password">
                </FormInputText>
            </div>
            <button type="submit"
                class="rounded border-0 py-2 px-8 font-bold text-white transition-colors duration-500 focus:outline-none">
                <span v-if="!isLoading">Log In</span>
                <span v-else>Loading...</span>
            </button>
        </VeeForm>
    </section>
</template>
  

<style lang="scss" scoped>
.sign-in {
    background: $background-color;
    color: #fff !important;
    height: 100vh;
    padding: 5rem 20px 0 20px;

    .login-form {
        background: $main-color;
    }

    h2 {
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
    }

    button {
        background-color: $secondary-color;
    }
}
</style>