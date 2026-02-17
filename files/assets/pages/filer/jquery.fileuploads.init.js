
/**
* Theme: Codefox Admin Template
* Author: Coderthemes
 * Email: coderthemes@gmail.com
* File Uploads
*/

$(document).ready(function(){

	'use-strict';

    //Example single
    $('#filer_input_single').filer({
        extensions: ['jpg', 'jpeg', 'png', 'gif', 'psd'],
        changeInput: true,
        showThumbs: true,
        addMore: false
    });

    //Example 2
    $('#filer_input').filer({
        limit: 3,
        maxSize: 3,
        extensions: ['jpg', 'jpeg', 'png', 'gif', 'psd'],
        changeInput: true,
        showThumbs: true,
        addMore: true
    });

    $("#alert_excell_close").click(function() {
        $("#alert_excell").addClass("d-none"); // ou .addClass("d-none")
    });

	//Upload de arquivos 
    $("#filer_input1").filer({
        limit: 1,
        maxSize: null,
        extensions: ['xls','xlsx'],
        changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-cloud-up-o"></i></div><div class="jFiler-input-text"><h3>Arraste e solte arquivos aqui</h3> <span style="display:inline-block; margin: 15px 0">ou</span></div><a class="jFiler-input-choose-btn btn btn-primary waves-effect waves-light">Navegar pelos arquivos</a></div></div>',
        showThumbs: true,
        theme: "dragdropbox",
        templates: {
            box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
            item: '<li class="jFiler-item">\
                        <div class="jFiler-item-container">\
                            <div class="jFiler-item-inner">\
                                <div class="jFiler-item-thumb">\
                                    <div class="jFiler-item-status"></div>\
                                    <div class="jFiler-item-info">\
                                        <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        <span class="jFiler-item-others">{{fi-size2}}</span>\
                                    </div>\
                                    {{fi-image}}\
                                </div>\
                                <div class="jFiler-item-assets jFiler-row">\
                                    <ul class="list-inline pull-left">\
                                        <li>{{fi-progressBar}}</li>\
                                    </ul>\
                                    <ul class="list-inline pull-right">\
                                        <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                    </ul>\
                                </div>\
                            </div>\
                        </div>\
                    </li>',
            itemAppend: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                            <span class="jFiler-item-others">{{fi-size2}}</span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <li><span class="jFiler-item-others">{{fi-icon}}</span></li>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>',
            progressBar: '<div class="bar"></div>',
            itemAppendToEnd: false,
            removeConfirmation: true,
            _selectors: {
                list: '.jFiler-items-list',
                item: '.jFiler-item',
                progressBar: '.bar',
                remove: '.jFiler-item-trash-action'
            }
        },
        dragDrop: {
            dragEnter: null,
            dragLeave: null,
            drop: null,
        },/*
        uploadFile: {
            url: "ler_excell.php",
            data: null,
            type: 'POST',
            enctype: 'multipart/form-data',
            beforeSend: function(){},
            success: function(data, el){
                var parent = el.find(".jFiler-jProgressBar").parent();
                el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                    $("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i> Success</div>").hide().appendTo(parent).fadeIn("slow");
                });
                $("#alert_excell")
                    .removeClass("d-none") // ou .show()
                    .removeClass("alert-danger alert-success") // se quiser mudar cor
                    .addClass("alert-success") // ou "alert-danger"
                    .html(`
                        <strong>SUCESS!</strong> `+data.message+`
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    `)
                    .show()
                    .delay(3000)
                    .fadeOut(500);
                console.log(data.message);
            },
            error: function(data, el){
                var parent = el.find(".jFiler-jProgressBar").parent();
                el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                    $("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i> Error</div>").hide().appendTo(parent).fadeIn("slow");
                });
                $("#alert_excell")
                    .removeClass("d-none") // ou .show()
                    .removeClass("alert-danger alert-success") // se quiser mudar cor
                    .addClass("alert-danger") // ou "alert-danger"
                    .html(`
                        <strong>ERROR!</strong> `+data+`
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    `)
                    .show()
                    .delay(3000)
                    .fadeOut(500);
                console.log(el);
            },
            statusCode: null,
            onProgress: null,
            onComplete: null
        },*/
		files: [],
        addMore: false,
        clipBoardPaste: true,
        excludeName: null,
        beforeRender: null,
        afterRender: null,
        beforeShow: null,
        beforeSelect: null,
        onSelect: function () {
            $("#alert_excell").addClass("d-none");
        },
        afterShow: null,
        /* onRemove: function(itemEl, file, id, listEl, boxEl, newInputEl, inputEl){}, */
        onEmpty: null,
        options: null,
        captions: {
            button: "Arraste e solte arquivos aqui asdasdasd",
            feedback: "Escolha os arquivos para enviar",
            feedback2: "arquivos foram selecionados",
            drop: "Solte o arquivo aqui para enviar",
            removeConfirmation: "Tem certeza de que deseja remover este arquivo?",
            errors: {
                filesLimit: "Apenas {{fi-limit}} arquivos podem ser enviados",
                filesType: "Apenas imagens são permitidas para envio.",
                filesSize: "{{fi-name}}  é muito grande! Envie um arquivo de até {{fi-maxSize}} MB.",
                filesSizeAll: "Os arquivos escolhidos são muito grandes! PEnvie arquivos de até {{fi-maxSize}} MB."
            }
        }
    });
});