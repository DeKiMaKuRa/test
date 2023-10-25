<template>
    <div>
        <div v-if="isAuthenticated">
            <div>Приветствую вас, <b>{{ username }}</b></div>
            <button class="button" @click="logout">Выйти из аккаунта</button>
        </div>
        <div v-else>
            <div class="login-form">
                <label for="username" class="label">Введите имя:</label>
                <input v-model="username" id="username" class="input" />
                <button @click="login" class="button">Войти</button>
            </div>
        </div>

        <div v-if="isAuthenticated">
            <div class="art-list">
                <div v-for="(art, index) in arts" :key="index" class="art-item">
                    <div class="art-description"> {{ art.description }} </div>
                    <div class="art-image"> <img style="height: 100%;" :src="art.image" alt="Art Image"> </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Book from '../../img/Book.jpg';
import Music from '../../img/Music.png';
import Pictures from '../../img/Pictures.jpg';

export default {
    name: 'HomePage',
    data() {
        return {
            isAuthenticated: false,
            username: '',
            arts: [
                {
                    name: 'Живопись',
                    image: Pictures,
                    description: 'Живопись - это чарующее искусство, где художник, словно волшебник, преображает пустой холст в уникальный мир красок и вдохновения. Каждый штрих кисти несет в себе глубокие эмоции и мгновенно переносит нас в мир художественных историй. От дерзких мазков масляных красок до деликатных акварельных пейзажей, каждая картина представляет собой портал в мир, наполненный символами, смыслами и эмоциями. Даже без слов художник способен передать свое видение, рассказать историю или вызвать у зрителя бурю чувств. Это искусство переплетает в себе техническое мастерство, человеческую душу и способность видеть красоту даже в самых обыденных вещах.',

                },
                {
                    name: 'Музыка',
                    image: Music,
                    description: 'Музыка - это бесспорно величайшее искусство, в котором звуки становятся языком самой души. Эта магия звуков проникает глубоко внутрь нас, оказывая воздействие на наши самые глубокие чувства и эмоции. Независимо от того, являетесь ли вы поклонником классических симфоний или предпочитаете популярные мелодии, музыка способна проникнуть в сердце каждого, обогатив нашу жизнь звуками и гармонией. Классическая музыка поднимает нас на вершины возвышенных чувств и позволяет открыть для себя сложные композиции, написанные великими мастерами прошлого. Это искусство трансформирует тишину в звуковой ландшафт, способный рассказать историю, перенести нас в другую эпоху и позволить нам почувствовать себя частью симфонической сказки.',
                },
                {
                    name: 'Литература',
                    description: 'Литература - это ключ к нескончаемым мирам и историям. Книги раскрывают перед нами окно в чужие судьбы, учат, вдохновляют и расширяют наши горизонты. Каждая страница - это приглашение в увлекательное путешествие. Литература Читая книги, мы можем путешествовать во времени и пространстве, погружаться в древние цивилизации, исследовать неизведанные уголки Вселенной, и знакомиться с удивительными личностями, будь то вымышленные герои или великие мыслители прошлого. Каждая книга - это возможность открыть для себя новые идеи, истории и пережить приключения, не покидая уюта своего дома. Литература также обогащает нашу эмоциональную сферу и помогает понять себя и окружающий мир. Она может быть источником вдохновения, утешения, наставления, или просто радостного времяпрепровождения. Книги отражают глубокие аспекты человеческой природы, позволяя нам лучше понимать себя и окружающих. ',
                    image: Book,
                },
            ],
        };

    },
    methods: {
        login() {
            if (this.username !== '') {
                this.isAuthenticated = true;
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('username', this.username);

                this.$router.push({
                    name: 'Chat',
                    query: { username: this.username },
                });
            } else {
                alert('Напишите имя');
            }
        },
        logout() {
            this.isAuthenticated = false;
            this.username = '';
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('username');
        },
    },
    created() {
        if (localStorage.getItem('isAuthenticated')) {
            this.isAuthenticated = true;
            this.username = localStorage.getItem('username');
        }
    },
};
</script>
  
<style>
.login-form {
    text-align: center;
    margin: 20px auto;
    padding: 20px;
    background-color: rgb(39, 46, 52);
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
}

.label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
}

.input {
    width: 100%;
    padding: 5px;
    background-color: rgb(45, 51, 57);
    font-family: "RalewayRegular";
    font-size: large;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.button {
    background-color: rgb(45, 51, 57);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: rgb(39, 46, 52);
}

.art-list {
    display: flex;
    flex-wrap: wrap;
}

.art-item {
    width: 100%;
    margin: 10px 0;
    border: 3px solid rgb(39, 46, 52);
    padding: 10px;
    height: 250px;
}

.art-description {
    line-height: 2.5;
    width: 70%;
    float: right;
    border: 1px solid rgb(39, 46, 52);
    height: 250px;
    overflow: hidden;
}

.art-image {
    width: 30%;
    float: left;
    height: 250px;
    position: fixed;
    opacity: 0.8;
}
</style>
  