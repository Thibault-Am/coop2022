<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">Coop</a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/creer-conversation">Créer une conversation</router-link>
                <router-link class="navbar-item" to="/">Conversations</router-link>
                <router-link class="navbar-item" to="/membres">Membres</router-link>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <p class="content">Connecté en tant que <b>{{$store.state.member.fullname}}</b></p>
                </div>
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link class="button is-warning" to="deconnexion">Se deconnecter</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>