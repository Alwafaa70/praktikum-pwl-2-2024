let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center bg-gray-200 p-3 mb-2 rounded-lg`;
   task.innerHTML = `
         <p class="flex-1">${title}</p>
         <div>
            <input type="button" value="SELESAI" data-task="${task.id}"
                   class="btn-selesai bg-green-500 text-white font-bold p-1 rounded-lg hover:bg-green-600 transition-all cursor-pointer mr-2">
            <input type="button" value="HAPUS" data-task="${task.id}"
                   class="btn-hapus bg-red-500 text-white font-bold p-1 rounded-lg hover:bg-red-600 transition-all cursor-pointer">
         </div>
   `;

   output.appendChild(task);
   input.value = "";

   // Tambahkan event listener untuk tombol selesai
   task.querySelector('.btn-selesai').onclick = () => {
      let taskText = task.querySelector('p');
      taskText.classList.toggle('line-through'); // Toggle garis melalui teks
      taskText.classList.toggle('text-gray-500'); // Toggle warna teks
   };

   // Tambahkan event listener untuk tombol hapus
   task.querySelector('.btn-hapus').onclick = () => {
      output.removeChild(task); // Hapus tugas dari output
   };

   e.preventDefault();
};
