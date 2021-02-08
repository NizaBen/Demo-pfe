<template>
  <div>
    <h1>Commercials List</h1>
    <div class="text-right">
      <modal ref="modalName">
        <template v-slot:header>
          <h1>Modal title</h1>
        </template>

        <template v-slot:body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
            velit dignissim
          </p>
          <p>
            Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl
            nunc mi.estie nunc non blandit. Tellus mauris a diam maecenas sed
            enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat pretium. Mattis aliquam faucibus purus in massa.
          </p>
        </template>

        <template v-slot:footer>
          <div class="d-flex align-items-center justify-content-between">
            <button
              class="btn btn--secondary"
              @click="$refs.modalName.closeModal()"
            >
              Cancel
            </button>
            <button
              class="btn btn--primary"
              @click="$refs.modalName.closeModal()"
            >
              Save
            </button>
          </div>
        </template>
      </modal>
      <button
        class="btn btn-outline-primary mx-auto"
        @click="$refs.modalName.openModal()"
      >
        Add a new commercial
      </button>
    </div>
    <table class="table text-light">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Adress</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Modal from "../components/Modal";

export default {
  name: "Commercial",
  components: {
    Modal,
  },
};
</script>
<style lang="scss">
table {
  background: #0185d2;
}
.btn {
  padding: 8px 16px;
  border-radius: 5px;
  &--primary {
    background-color: green;
    color: #fff;
  }
  &--secondary {
    background-color: #dddd;
    color: #000;
  }
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}

button {
  background: none;
  border: none;
  outline: inherit;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>