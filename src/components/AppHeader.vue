<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            mobileNav: null,
            mobile: null,
            scrolledNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
    },
}
</script>

<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav class="d-flex justify-content-between pt-3">
            <div class="logo">
                <router-link :to="{name: 'home'}" class="navbar-brand" style="color: white;">BlogTest_Glacom</router-link>
            </div>
            <div class="nav-links">
                <ul class="nav-menu" v-show="!mobile">
                    <li class="nav-link">
                        <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-link">
                        <router-link :to="{name: 'articles'}" class="nav-link">Articles</router-link>
                    </li>
                    <li class="nav-link">
                        <a class="nav-link" href="http://127.0.0.1:8000/admin">Area Riservata</a>
                    </li>
                </ul>
            </div>
            <div class="icon-hamburger">
                <i
                  @click="toggleMobileNav"
                  v-show="mobile"
                  class="fa-solid fa-bars"
                  :class="{ 'active-icon': mobileNav }"
                ></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li class="nav-link">
                        <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-link">
                        <router-link :to="{name: 'articles'}" class="nav-link">Articles</router-link>
                    </li>
                    <li class="nav-link">
                        <a class="nav-link" href="http://127.0.0.1:8000/admin">Area Riservata</a>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    color: white;
    margin-bottom: 50px;
    background-color: rgba($color:#212529, $alpha: 0.55);
    position: fixed;
    z-index: 100;
    transition: all 0.5s ease;

    nav {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        position: relative;
        transition: all 0.5s ease;

        @media (min-width: 1140px) {
            max-width: 1140px;
        }

        .nav-links {
            display: flex;
            align-items: center;
        }

        ul, 
        .nav-link {
            font-weight: 550;
            color: white;
            list-style: none;
            text-decoration: none;
            margin-bottom: 0;
        }

        li {
            text-transform: uppercase;
            margin-left: 35px;
        }

        a {
            color: white;
            text-decoration: none;
            font-size: 14px;
        }

        .nav-link,
        a {
            font-size: 14px;
            transition: all 0.5s ease;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;

            &:hover {
                color: var(--accent);
                border-color: var(--accent);
            }
        }

        .logo {
            display: flex;
            align-items: center;
            font-family: 'Yeseva One', cursive;
            a {
                font-size: 30px;
                font-weight: 550;

            }
        }

        .nav-menu {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon-hamburger {
            height: 100%;
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: all 0.5s ease;
            }
        }

        .active-icon {
            transform: rotate(180deg);
        }

        .dropdown-nav {
            background-color: var(--primary);
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 280px;
            height: 100%;
            top: 0;
            left: 0;

            li {
                margin-left: 0;
                margin-top: 20px;

                .nav-link {
                    color: white;
                }
            }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }

        .mobile-nav-enter-to {
            transform: translateX(0);
        }
    }
}

.scrolled-nav {
  background-color: var(--primary);
  box-shadow: 0 4px 6px -1px rgba(78, 79, 87, 0.1),
    0 2px 4px -1px rgba(73, 75, 82, 0.06);

  nav {
    padding: 8px 0;
  }
}

</style>