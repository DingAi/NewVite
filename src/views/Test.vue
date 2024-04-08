<template>
  <div class="full">
    <el-button type="danger" @click="downloadCSV">DownLoad Test</el-button>
  </div>
</template>

<script setup>
import * as StreamSaver from "streamsaver";


const downloadCSV = async () =>{
  const url = 'fastapi/download'
  const filename = `random_data.csv`;
  const fileStream = StreamSaver.createWriteStream(filename);

  fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'text/csv',
    }
  }).then(response => {
    const readableStream = response.body

    // more optimized
    if (window.WritableStream && readableStream.pipeTo) {
      return readableStream.pipeTo(fileStream)
          .then(() => console.log('done writing'))
    }
    window.writer = fileStream.getWriter()

    const reader = response.body.getReader()
    const pump = () => reader.read()
        .then(res => res.done
            ? window.writer.close()
            : window.writer.write(res.value).then(pump))

    pump()
  })
}

</script>
