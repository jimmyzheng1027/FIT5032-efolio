<template>
    <!-- <div class="container">
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">Home (Week 4)</a>
                </li>
                <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Contact us</a></li>
            </ul>
        </header>
    </div> -->

    <div class="container mt-5">
        <div>
            <h1 class="text-center">🗄️ W9. Library Registration Form</h1>
            <p class="text-center">
                Let's build some more advanced features into our from.
            </p>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">User Information Form</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-6 col-sm-6">
                            <label for="username" class="form-label">Username:</label>
                            <input type="text" class="form-control" id="username" @blur="() => validateName(true)"
                                @input="() => validateName(false)" v-model="formData.username" />
                            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <label for="gender" class="form-label">Gender</label><br>
                            <select class="form-select" id="gender" @blur="() => validateGender(true)"
                                @input="() => validateGender(false)" v-model="formData.gender">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                            <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
                        </div>

                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6 col-sm-6">
                            <label for="password" class="form-label">Password:</label>
                            <input type="password" class="form-control" id="password"
                                @blur="() => validatePassword(true)" @input="() => validatePassword(false)"
                                v-model="formData.password" />
                            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <label for="confirm-password" class="form-label">Confirm password</label>
                            <input type="password" class="form-control" id="confirm-password"
                                @blur="() => validateConfirmPassword(true)" v-model="formData.confirmPassword" />
                            <div v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword }}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6 col-sm-6">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="isAustralian?"
                                    @blur="() => validateResident(true)" @input="() => validateResident(false)"
                                    v-model="formData.isAustralian" />
                                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                                <div v-if="errors.isAustralian" class="text-danger">{{ errors.isAustralian }}</div>
                            </div>

                        </div>

                    </div>
                    <div class="mb-3">
                        <label for="reason" class="form-label">Reason For Joining</label><br>
                        <textarea id="reason" class="form-control" rows="3" @blur="() => validateReason(true)"
                            @input="() => validateReason(false)" v-model="formData.reason"></textarea><br>
                        <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
                        <div v-if="message.reason">
                            <p style="color: green;">{{ message.reason }}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <label for="suburb" class="form-label">Suburb:</label>
                        <input type="text" class="form-control" id="suburb" @blur="() => validateSuburb(true)"
                            @input="() => validateSuburb(false)" v-model="formData.suburb" />
                        <div v-if="errors.suburb" class="text-danger">{{ errors.suburb }}</div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                    </div>
                </form>
                <!-- <div class="row mt-5" v-if="submittedCards.length">
                    <div class="d-flex flex-wrap justify-content-start">
                        <div v-for="(card, index) in submittedCards" :key="index" class="card m-2"
                            style="width: 18rem;">
                            <div class="card-header">
                                User Information
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Username: {{ card.username }}</li>
                                <li class="list-group-item">Password: {{ card.password }}</li>
                                <li class="list-group-item">Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
                                </li>
                                <li class="list-group-item">Gender: {{ card.gender }}</li>
                                <li class="list-group-item">Reason: {{ card.reason }}</li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <DataTable :value="submittedCards" tableStyle="min-width: 50rem" class="mt-5">
                    <Column field="username" header="username"></Column>
                    <Column field="password" header="Password"></Column>
                    <Column field="isAustralian" header="Australian Resident"></Column>
                    <Column field="gender" header="Gender"></Column>
                    <Column field="reason" header="Reason"></Column>
                    <Column field="suburb" header="Suburb"></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script setup>
// Our logic will go here
import { ref } from 'vue';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
// import Message from 'primevue/message';

const formData = ref({
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: false,
    reason: '',
    gender: '',
    suburb: 'Clayton'
});

const submittedCards = ref([]);

const submitForm = () => {
    validateName(true);
    validatePassword(true);
    if (!errors.value.username && !errors.value.password) {
        submittedCards.value.push({
            ...formData.value
        });
        clearForm();
    }
};

const clearForm = () => {
    formData.value = {
        username: '',
        password: '',
        isAustralian: false,
        reason: '',
        gender: '',
        suburb: ''
    };
};

const errors = ref({
    username: null,
    password: null,
    confirmPassword: null,
    isAustralian: false,
    gender: null,
    reason: null,
    suburb: null
});

const message = ref({
    reason: null
});

const validateName = (blur) => {
    if (formData.value.username.length < 3) {
        if (blur) errors.value.username = "Name must be at least 3 characters";
    } else {
        errors.value.username = null;
    }
};

const validatePassword = (blur) => {
    const password = formData.value.password;
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`;
    } else if (!hasUppercase) {
        if (blur) errors.value.password = "Password must contain at least one uppercase letter.";
    } else if (!hasLowercase) {
        if (blur) errors.value.password = "Password must contain at least one lowercase letter.";
    } else if (!hasNumber) {
        if (blur) errors.value.password = "Password must contain at least one number.";
    } else if (!hasSpecialChar) {
        if (blur) errors.value.password = "Password must contain at least one special character.";
    } else {
        errors.value.password = null;
    }
};

const validateConfirmPassword = (blur) => {
    if (formData.value.password !== formData.value.confirmPassword) {
        if (blur) errors.value.confirmPassword = 'Passwords do not match.'
    } else {
        errors.value.confirmPassword = null
    }
}

const validateResident = (blur) => {
    if (!formData.value.isAustralian) {
        if (blur) errors.value.isAustralian = "Please click the button.";
    } else {
        errors.value.isAustralian = false;
    }
};
const validateGender = (blur) => {
    if (formData.value.gender == null || formData.value.gender == '') {
        if (blur) errors.value.gender = "Please select your gender.";
    } else {
        errors.value.gender = null;
    }
};

const validateSuburb = (blur) => {
    if (formData.value.suburb == null || formData.value.suburb == '') {
        if (blur) errors.value.suburb = "suburb can not be empty.";
    } else {
        errors.value.suburb = null;
    }
};

const validateReason = (blur) => {
    if (formData.value.reason == null || formData.value.reason == '') {
        if (blur) errors.value.reason = "Reason can not be empty.";
    } else {
        errors.value.reason = null;
    }
    if (formData.value.reason.includes('friend') || formData.value.reason.includes('Friend')) {
        message.value.reason = "Great to have a friend";
    } else {
        message.value.reason = null;
    }
};

</script>

<style scoped>
.container {
    max-width: 900px;
    margin: auto;
}

.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
    background-color: #275FDA;
    color: white;
    padding: 10px;
    border-radius: 10px 10px 0 0;
}

.list-group-item {
    padding: 10px;
}
</style>