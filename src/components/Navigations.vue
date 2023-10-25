<template>
    <div class="nav">
        <nav>
            <div class="centered-container">
                <div class="HomePage">

                    <router-link style="color: rgb(182, 200, 184)" onmouseover="this.style.color = 'rgb(77, 86, 84)';"
                        onmouseout="this.style.color = 'rgb(182, 200, 184)';" to="/">
                        Домашняя страница
                    </router-link>

                </div>
                <div class="ChatPage">
                    <router-link style="color: rgb(182, 200, 184);" onmouseover="this.style.color = 'rgb(77, 86, 84)';"
                        onmouseout="this.style.color = 'rgb(182, 200, 184)';" to="/chat">
                        Чат
                    </router-link>
                </div>

            </div>
        </nav>
        <div class="transition-container">
            <transition name="fade" mode="out-in">
                <div v-if="isLoad">Загрузка данных...</div>
                <div v-else :key="currentIndex" class="animated-row">
                    {{ localCurrentArt.name }} - это {{ localCurrentArt.description }}
                </div>
            </transition>
        </div>
    </div>
</template>
  
  
<script>
export default {
    name: 'NavComp',
    data() {
        return {
            artData: [],
            isLoad: true,
            currentIndex: 0,
            localCurrentArt: {
                name: '',
                description: '',
            },
        };
    },
    mounted() {
        const url = 'http://localhost:8080/api/art';
        const options = {
            method: 'GET',
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                this.artData = res.data;
                this.isLoad = false;

                if (this.artData.length > 0) {
                    this.animateArt();
                }
            });
    },
    methods: {
        animateArt() {
            if (this.currentIndex >= this.artData.length) {
                this.currentIndex = 0;
            }
            this.localCurrentArt = this.artData[this.currentIndex];
            this.currentIndex++;

            setTimeout(this.animateArt, 3000);
        },
    },
};
</script>
  
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.animated-row {
  opacity: 1;
  animation: fade 3s forwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


.nav {
    background-color: rgb(39, 46, 52);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
}

nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* Добавили */
}

.transition-container {
    width: 200px;
    overflow: hidden;
    text-align: right;
    margin-top: 25px;
    position: absolute;
    padding-right: 20px;
    top: 0;
    right: 0;

}

.centered-container {
    display: flex;
    justify-content: center;
    position: relative;
    display: block;
    text-align: center;
    width: 40%;
    border: 4px solid rgb(45, 51, 57);
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.HomePage {
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
    justify-content: center;
}

.ChatPage {
    width: 50%;
    height: 100%;
    float: right;
    text-align: center;
}
</style>

  