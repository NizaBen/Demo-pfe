<template>
  <div>
    <h1>Commands List</h1>
    <div class="text-right">
      <button type="button" class="btn btn-outline-success">
        Add a new command
      </button>
    </div>
    <table class="table text-light">
      <thead>
        <tr>
          <th scope="col">.Ref</th>
          <th scope="col">Products</th>
          <th scope="col">Commercial Name</th>
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
export default {
  name: "Command",
};
</script>
<style>
table {
  background: #0185d2;
}
</style>