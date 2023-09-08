<template>
    <section class="sign-in">
        <form @submit.prevent="login()" class=" mx-auto flex w-full flex-col rounded-lg  p-8 shadow-lg  md:w-1/2 lg:w-2/6">
            <h2 class="mb-5 text-lg font-medium">Log In</h2>

            <!-- <div class=" mb-4">
                <label for="email" class="text-sm leading-7">Email:</label>
                <input v-model="formData.email" type="email" id="email" name="email" @change="v$.email.$touch"
                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    :class="{
                        'border-red-500 focus:border-red-500': v$.email.$error,
                    }">

                <p class="text-red-500" v-if="v$.email.$error"> {{ v$.email.required.$message }}</p>
            </div>
             -->

            <div class=" mb-4">
                <FormInputText
                    v-model="formData.email"
                    label="email"
                    name="email"
                    rules="required|email"
                >
                </FormInputText>
            </div>

            <!-- <div class="mb-4">
                <label for="password" class="text-sm leading-7">Password:</label>
                <input v-model="formData.password" type="password" id="password" name="password"
                    @change="v$.password.$touch" :class="{
                        'border-red-500 focus:border-red-500': v$.password.$error,
                    }"
                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent">
                <p class=" text-red-500" v-if="v$.password.$error"> {{ v$.password.required.$message }}</p>
            </div> -->

            <button type="submit"
                class="rounded border-0 bg-blue-500 py-2 px-8 font-bold text-white transition-colors duration-500 focus:outline-none">
                <span v-if="!isLoading">Log In</span>
                <span v-else>Loading...</span>
            </button>
        </form>
    </section>
</template>
  
<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import AuthServices from "@/services/auth/auth"
import { useRouter } from 'vue-router';



// Define the types for your data
interface FormData {
    email: string;
    password: string;
}

// Define the reactive variables and types
const router = useRouter();
const store = useAuthStore();
const isLoading = ref(false);
const formData = reactive<FormData>({
    email: '',
    password: '',
});

// Define the validation rules


// Create the vuelidate instance

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
                store.isAuthenticated = true;
                useAuthStore().setAuthToken(response.data.auth_token);
                store.setUser(response.data.data);
                isLoading.value = false;
                router.push('/');
            })
            .catch((error) => {
                isLoading.value = false;
                console.error('Axios error:', error);
            });

};
</script>
<style lang="scss" scoped>
.sign-in {
    background: $background-color;
    color: #fff !important;
    height: 100vh;
    padding: 5rem 20px 0 20px;

    form {
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