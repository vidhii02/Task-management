const state={
    taskList:[],
};

//DOM - document object
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task_modal_body");

const htmlTaskContents=({id,title, description, type, url})=>`
    <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
        <div class='card shaodow-sm task__card'>
            <div class='card-header d-flex gap-2 justify-content-end task__card__header'>
            <button type='button' class='btn btn-outline-info mr-2' name=${id}>
            <i class='fas fa-pencil-alt' name=${id}></i>
            </button>
            <button type='button' class='btn btn-outline-danger mr-2' name=${id}>
            <i class='fas fa-trash-alt' name=${id}></i>
            </button>
            </div>
                <div class='card-body>
                ${
                    url && `<img width='100%' src=${url} alt='card image cap' class='card-image-top md-3 rounded-lg'/>`
                }
                <h4 class='task__card__title'>${title}</h4>   
                <p class='description trim-3-lines text-muted' data-gram_editor='false'>
                ${description}</p>  
                <div class=' tags text-white d-flex flex-wrap'>
                <span class='badge bg-primary m-1'>${type}</span>
                </div>  
                <div class='card-footer'>
                <button type='button class='btn btn-outline-primaryy float-right' data-bs-toggle='modal'
                data-bs-target='#showTask'>Open Task</button> 
                </div>
            </div>
        </div>
    </div>
`;

const htmlModalCotent =({id, title, description, url})=>{
    const date = new Date(parseInt(id));
    return`
    <div id=${id}>
    ${
        url && `<img width='100%' src=${url} alt='card image cap' class='img-fluid place__holder__image'/>`
    }
    <strong class='text-sm text-muted'>Created on ${date.toDateString()}</strong>
    <h2 class='my-3'>${title}</h2>
    <p>${description}</p>
    </div>
    `
}

const updatelocalStorage = () => {
    localStorage.setItem('task', JSON.stringfy())
}