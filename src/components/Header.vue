<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <a class="navbar-brand px-2" href="#">Navbar</a>
            <ul
                class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style="--bs-scroll-height: 100px"
            >
                <li><a class="nav-link active" href="/index.html">Home</a></li>
                <li><a class="nav-link active" href="/todo.html">Todo</a></li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        >Link</a
                    >
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                            <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#"
                                >Something else here</a
                            >
                        </li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style>
</style>