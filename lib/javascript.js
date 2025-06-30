function max_linhas(obj) {
    var txt_obj = trim(obj.value);
    var linhas = txt_obj.split('\n');
    if (linhas.length > 5) {
        if (event.keyCode == 13) {
            event.returnValue = false;
        }
    }
}
function max_letras(obj) {
    var txt_obj = obj.value;
    var linhas = txt_obj.split('\n');
    for (var n = 0; n < linhas.length; n++) {
        linhas[n] = linhas[n].substr(0,17);
    }
    obj.value = linhas.join('\n');
}
function ver_hoje() {
    var hoje = new Date();
    var dia = parseInt(hoje.getDate());
    var ano = parseInt(hoje.getFullYear());
    var hora =  parseInt(hoje.getHours());
    var minuto = parseInt(hoje.getMinutes());
    var segundo = parseInt(hoje.getSeconds());
    var saudacao = document.getElementById('saudacao');
    var dia_semana = new Array('Domingo','Segunda','Ter�a','Quarta','Quinta','Sexta','S�bado');
    var mes = new Array('Janeiro','Fevereiro','Mar�o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');
    var mostrar = 'Ol�';
    if (hora >= 0 && hora <= 11) {
        mostrar = 'Bom Dia';
    }
    if (hora >= 12 && hora <= 17) {
        mostrar = 'Boa Tarde';
    }
    if (hora >= 18 && hora <= 23) {
        mostrar = 'Boa Noite';
    }
    if (hora < 10) {
        hora = '0' + hora;
    }
    if (minuto < 10) {
        minuto = '0' + minuto;
    }
    if (segundo < 10) {
        segundo = '0' + segundo;
    }
    saudacao.innerHTML = '<B>' + mostrar + '</B>. ' + hora + ':' + minuto + ':' + segundo;
    window.setTimeout('ver_hoje();', 100);
}
function remove_zero_esq(/*str*/) {
    var str = '';
    if (arguments.length > 0) {
        str = '' + arguments[0];
        if (trim(str) != '') {
            for (var n = 0; n < str.length; n++) {
                if (str.charAt(0) == '0') {
                    str = str.substring(1,str.length);
                }
            }
        }
    }
    return str;
}
function trim(/*str*/) {
    var str = '';
    if (arguments.length > 0) {
        str = '' + arguments[0];
        for (var n = 0; n < str.length; n++) {
            if (str.charAt(0)) {
                if (str.charAt(0) == ' ') {
                    str = str.substring(1,str.length);
                }
                if (str.charAt(str.length - 1)) {
                    if (str.charAt(str.length - 1) == ' ') {
                        str = str.substring(0,(str.length - 1));
                    }
                }
            }
        }
    }
    return str;
}
function remove_caracteres(/*texto,caracteres*/) {
    var txt_resposta = '';
    if (arguments.length > 1) {
        texto = '' + arguments[0];
        caracteres = '' + arguments[1];
        for (var n = 0; n < texto.length; n++) {
            var achou = false;
            for (var j = 0; j < caracteres.length; j++) {
                if (texto.charAt(n) == caracteres.charAt(j)) {
                    achou = true;
                }
            }
            if (achou == false) {
                txt_resposta += '' + texto.charAt(n);
            }
        }
    }
    return txt_resposta;
}
function remove_letras(/*texto*/) {
    var txt_resposta = '';
    if (arguments.length > 0) {
        var texto = '' + arguments[0];
        if (trim(texto) != '') {
            for (var n = 0; n < texto.length; n++) {
                if (isNaN(texto.charAt(n)) == false) {
                    txt_resposta += '' + texto.charAt(n);
                }
            }
        }
    }
    return txt_resposta;
}
function remove_numeros(/*texto*/) {
    var txt_resposta = '';
    if (arguments.length > 0) {
        var texto = '' + arguments[0];
        if (trim(texto) != '') {
            for (var n = 0; n < texto.length; n++) {
                if (isNaN(texto.charAt(n)) == true) {
                    txt_resposta += '' + texto.charAt(n);
                }
            }
        }
    }
    return txt_resposta;
}
function separador(/*valor,tipo,excecoes*/) {
    var divisoes = '';
    if (arguments.length > 0) {
        var valor = '' + arguments[0];
        var numerico = true;
        if (arguments[1]) {
            if (remove_caracteres(arguments[1],' ') != '') {
                var tipo = '' + arguments[1];
                if (isNaN(parseInt(tipo)) == true) {
                    numerico = false;
                }
            }
        }
        var num_excecoes = 0;
        var excecoes = '';
        if (arguments[2]) {
            excecoes = '' + remove_caracteres(arguments[2],' ');
        }
        num_divisao = 0;
        divisoes = new Array();
        for (var n = 0; n < valor.length; n++) {
            var enc_excecao = false;
            var enc_prox_excecao = false;
            if (excecoes.length > 0) {
                for (var i = 0; i < excecoes.length; i++) {
                    if (valor.charAt(n) == excecoes.charAt(i)) {
                        enc_excecao = true;
                    }
                    if (valor.charAt((n + 1)) != null) {
                        if (valor.charAt((n + 1)) == excecoes.charAt(i)) {
                            enc_prox_excecao = true;
                        }
                    }
                }
            }
            if (isNaN(parseInt(valor.charAt(n))) != numerico || enc_excecao == true) {
                if (divisoes[num_divisao] == null) {
                    divisoes[num_divisao] = '';
                }
                divisoes[num_divisao] += '' + valor.charAt(n);
                if (valor.charAt((n + 1)) != null) {
                    var prox_chr = valor.charAt((n + 1));
                    if (isNaN(parseInt(prox_chr)) == numerico && enc_prox_excecao == false) {
                        num_divisao += 1;
                    }
                }
            }
        }
    }
    return divisoes;
}
function soma(/*valor1,valor2*/) {
    var str_temp = '';
    if (arguments.length > 1) {
        var valor1 = '' + remove_letras(arguments[0]);
        var valor2 = '' + remove_letras(arguments[1]);
        var val_1 = remove_zero_esq(valor1);
        var val_2 = remove_zero_esq(valor2);
        var resultado = 0;
        var num_chr_val_1 = parseInt(val_1.length);
        var num_chr_val_2 = parseInt(val_2.length);
        var num_caracteres = 0;
        if (num_chr_val_1 < num_chr_val_2) {
            num_caracteres = num_chr_val_2;
        } else {
            num_caracteres = num_chr_val_1;
        }
        var sobra = 0;
        for (var n = 0; n < num_caracteres; n++) {
            var valor1_temp = parseInt(val_1.charAt(val_1.length - (n + 1)));
            var valor2_temp = parseInt(val_2.charAt(val_2.length - (n + 1)));
            resultado = ((valor1_temp + valor2_temp) + sobra);
            if (isNaN(resultado) == true) {
                if (isNaN(valor1_temp) == false) {
                    resultado = (valor1_temp + sobra);
                }
                if (isNaN(valor2_temp) == false) {
                    resultado = (valor2_temp + sobra);
                }
            }
            var tmp = '' + resultado;
            if (tmp.length > 1) {
                str_temp = '' + tmp.charAt(1) + '' + str_temp;
                sobra = parseInt(tmp.charAt(0));
            } else {
                str_temp = '' + tmp.charAt(0) + '' + str_temp;
                sobra = 0;
            }
        }
    }
    return str_temp;
}
function formato_numero(/*variavel,casas_decimais,separador_decimal,separador_milhar*/) {
    var str_formatada = '';
    if (arguments.length > 0) {
        var variavel = '0';
        if (arguments[0]) {
            if (arguments[0] != '') {
                variavel = '' + arguments[0];
            }
        }
        var casas_decimais = parseInt(variavel.length);
        if (arguments[1]) {
            casas_decimais = remove_letras(arguments[1]);
            casas_decimais = remove_zero_esq(casas_decimais);
            if (isNaN(parseInt(casas_decimais)) == false) {
                casas_decimais = parseInt(casas_decimais);
            }
        }
        var separador_decimal = ',';
        if (arguments[2]) {
            if (arguments[2] != '') {
                separador_decimal = '' + arguments[2];
            }
        }
        var separador_milhar = '.';
        if (arguments[3]) {
            if (arguments[3] != '') {
                separador_milhar = '' + arguments[3];
            }
        }
        var valor = separador(variavel);
        var esquerda = '';
        var direita = '';
        var str_temp = '';
        var casas_milhar = 3;
        if (valor.length > 1) {
            for (var n = 0; n < valor.length; n++) {
                if (n < (valor.length - 1)) {
                    esquerda += '' + valor[n];
                } else {
                    direita += '' + valor[n];
                }
            }
            var mil_inicial = 0;
            for (var n = 0; n < esquerda.length; n++) {
                var str_temp = '' + esquerda.charAt(esquerda.length - (n + 1)) + '' + str_temp;
                mil_inicial++;
                if (mil_inicial == casas_milhar) {
                    str_temp = separador_milhar + '' + str_temp;
                    mil_inicial = 0;
                }
            }
            var zeros = '';
            if (parseInt(direita.length) < casas_decimais) {
                for (var i = 0; i < (casas_decimais - direita.length); i++) {
                    zeros += '0';
                }
            }
            direita = direita.substr(0,casas_decimais);
            if (casas_decimais > 0) {
                str_formatada = '' + str_temp + separador_decimal + direita + '' + zeros;
            } else {
                str_formatada = '' + str_temp;
            }
        } else {
            var str_formatada = valor.join();
            str_formatada = str_formatada.replace(',','');
            var mil_inicial = 0;
            for (var n = 0; n < str_formatada.length; n++) {
                var str_temp = '' + str_formatada.charAt(str_formatada.length - (n + 1)) + '' + str_temp;
                mil_inicial++;
                if (mil_inicial == casas_milhar) {
                    str_temp = separador_milhar + '' + str_temp;
                    mil_inicial = 0;
                }
            }
            var zeros = '';
            for (var n = 0; n < casas_decimais; n++) {
                zeros += '0';
            }
            if (casas_decimais > 0) {
                str_formatada = '' + str_temp + separador_decimal + zeros;
            } else {
                str_formatada = '' + str_temp;
            }
        }
        if (isNaN(str_formatada.charAt(0)) == true) {
            str_formatada = str_formatada.substr(1,str_formatada.length);
        }
    }
    return str_formatada;
}
function filtra_teclas(/*chr_permitidos*/) {
    var codigo_tecla = event.keyCode;
    var tecla = String.fromCharCode(codigo_tecla);
    var chr_permitidos = '';
    if (arguments[0]) {
        if (trim(arguments[0]) != '') {
            chr_permitidos = '' + arguments[0];
        }
    }
    var achou = false;
    if (isNaN(parseInt(tecla)) == false) {
        achou = true;
    } else {
        for (var n = 0; n < chr_permitidos.length; n++) {
            if (tecla == chr_permitidos.charAt(n)) {
                achou = true;
            }
        }
    }
    event.returnValue = achou;
}
function filtra_letras() {
    var codigo_tecla = event.keyCode;
    var tecla = String.fromCharCode(codigo_tecla);
    event.returnValue = (isNaN(parseInt(tecla))) ? true : false;
}
function filtra_numeros() {
    var codigo_tecla = event.keyCode;
    var tecla = String.fromCharCode(codigo_tecla);
    event.returnValue = (isNaN(parseInt(tecla))) ? false : true;
}
function bloquear_evento() {
    if (event) {
        event.returnValue = false;
    }
}
function abrir_janela() {
    if (arguments.length > 1) {
        window.open(arguments[0],arguments[1],'width=' + (screen.availWidth - 30) + ',height=' + (screen.availHeight - 70) + ',status=yes,top=0,left=0,scrollbars=yes,resizable=yes');
    }
}
function CM() {
    div_menu_contexto = document.getElementById('div_menu_contexto');
    if (event != null && div_menu_contexto != null) {
        if (event.srcElement.parentElement != div_menu_contexto) {
            obj_clicado = event.srcElement;
            div_menu_contexto.style.top = ((event.y + document.body.scrollTop) - 3);
            div_menu_contexto.style.left = ((event.x + document.body.scrollLeft) - 3);
            div_menu_contexto.style.display = 'inline';
        }
        event.returnValue = false;
    }
}
function abrir_dlg_cor() {
    var cor_atual;
    dlgHelper = document.getElementById('dlgHelper');
    if (arguments[0] != null) {
        if (trim(arguments[0]).length > 0) {
            cor_atual = arguments[0];
            cor_atual = cor_atual.toString(16);
            cor_atual = '000000'.substr(0,(6 - cor_atual.length)) + cor_atual;
            cor = dlgHelper.ChooseColorDlg(cor_atual);
        } else {
            cor = dlgHelper.ChooseColorDlg();
        }
    } else {
        cor = dlgHelper.ChooseColorDlg();
    }
    if (cor != false) {
        cor = cor.toString(16);
        cor = '000000'.substr(0,(6 - cor.length)) + cor;
        return cor;
    }
}
function muda_cor_fundo() {
    if (obj_clicado != null) {
        if (cor_fundo = abrir_dlg_cor(obj_clicado.currentStyle.backgroundColor)) {
            obj_clicado.style.backgroundColor = cor_fundo;
        }
    }
}
function muda_cor_letra() {
    if (obj_clicado != null) {
        if (cor_letra = abrir_dlg_cor(obj_clicado.currentStyle.color)) {
            obj_clicado.style.color = cor_letra;
        }
    }
}
function ocultar_obj() {
    div_menu_contexto = document.getElementById('div_menu_contexto');
    if (obj_clicado != null) {
        if (obj_clicado.tagName != 'BODY' && obj_clicado != div_menu_contexto) {
            obj_clicado.style.filter = 'Alpha(Opacity=0, FinishOpacity=0, Style=10, StartX=10, StartY=100, FinishX=10, FinishY=100)';
        }
    }
}
function mostrar_obj() {
    div_menu_contexto = document.getElementById('div_menu_contexto');
    if (obj_clicado != null) {
        if (obj_clicado != div_menu_contexto) {
            obj_clicado.style.filter = '';
        }
    }
}
function oculta_div_menu_contexto() {
    div_menu_contexto = document.getElementById('div_menu_contexto');
    var evt = false;
    if (event) {
        if (event.type != 'mousedown') {
            evt = true;
        }
    }
    if (evt == false) {
        window.setTimeout('',5000);
    }
    if (obj_atual) {
        var obj_anterior = obj_atual;
        var achou = false;
        while(obj_anterior != null) {
            if (obj_anterior == div_menu_contexto) {
                achou = true;
            }
            obj_anterior = obj_anterior.parentElement;
        }
        if (achou == false) {
            div_menu_contexto.style.display = 'none';
        }
    }
    window.setTimeout('oculta_div_menu_contexto()',5000);
}
function ver_html() {
    document.getElementById('txt_html').value = document.documentElement.outerHTML;
    abrir_janela('about:blank','html');
    document.getElementById('frm_html').submit();
    document.getElementById('txt_html').value = '';
}
function propriedades_obj() {
    alert(obj_atual.innerWidth);
}
function mover() {
    if (ob != null) {
        if (N) {
            ob.moveTo((arguments[0].pageX - X),(arguments[0].pageY - Y));
        } else {
            ob.pixelLeft = (event.clientX - X) + document.body.scrollLeft;
            ob.pixelTop = (event.clientY - Y) + document.body.scrollTop;
            return false;
        }
    }
}
function WOL() {
    //document.body.scroll = 'auto';
}
function MD() {
    if (N) {
        ob = document.layers[arguments[0].target.name];
        X = arguments[0].x;
        Y = arguments[0].y;
        return false;
    } else {
        obj_atual = event.srcElement;
        var obj_anterior = obj_atual;
        var achou = false;
        var obj_encontrado;
        while (obj_anterior != null) {
            if (obj_anterior.currentStyle.position == 'absolute') {
                ob = obj_anterior;
            }
            var bck_obj_anterior = obj_anterior;
            obj_anterior = obj_anterior.parentElement;
            if (obj_anterior == null && ob == null) {
                ob = bck_obj_anterior;
            }
        }
        if (ob == null) {
            ob = obj_atual;
        }
        ob = ob.style;
        X = event.offsetX;
        Y = event.offsetY;
    }
    oculta_div_menu_contexto();
}
function MM() {
    /*	if (ob != null) {
            if (N) {
                ob.moveTo((arguments[0].pageX - X),(arguments[0].pageY - Y));
            } else {
                ob.pixelLeft = (event.clientX - X) + document.body.scrollLeft;
                ob.pixelTop = (event.clientY - Y) + document.body.scrollTop;
                return false;
            }
        }*/
}
function MU() {
    ob = null;
}
function MO() {
    if (event) {
        var txt_status = '';
        var titulo = false;
        obj_atual = event.srcElement;
        if (obj_atual.title != null) {
            if (obj_atual.title.length > 0) {
                txt_status = '' + obj_atual.title;
                titulo = true;
            }
        }
        if (txt_status.length == 0) {
            if (obj_atual.value != null) {
                txt_status = '' + obj_atual.value;
            } else {
                txt_status = obj_atual.innerText;
            }
        }
        if (obj_atual.tagName != 'BODY') {
            return window.status = txt_status;
        }
    }
}
function MT() {
    if (ob) {
        ob = null;
    }
    if (event) {
        return window.status = '';
    }
    oculta_div_menu_contexto();
}
function KU() {
    if (event != null) {
        var txt_status = '';
        obj_atual = event.srcElement;
        if (obj_atual.value != null) {
            if (obj_atual.type != 'password') {
                txt_status = '' + obj_atual.value;
            }
        } else {
            txt_status = obj_atual.innerText;
        }
        if (obj_atual.tagName != 'BODY') {
            return window.status = txt_status;
        }
    }
}

function menu_esq_sobre(este) {
    este.style.backgroundColor = '#EEEEEE';
    este.style.cursor = 'hand';
}
function menu_esq_fora(este) {
    este.style.backgroundColor = '';
}

var N = (document.all) ? 0 : 1;
if (N) {
    document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP | Event.MOUSEOVER | Event.MOUSEOUT | Event.KEYUP);
}

var ob;
var obj_atual;
var div_menu_contexto;
var dlgHelper;
var obj_clicado;
var X;
var Y;

//document.oncontextmenu = CM;
//document.onmousedown = MD;
//document.onmousemove = MM;
//document.onmouseup = MU;
//document.onmouseover = MO;
//document.onmouseout = MT;
//document.onkeyup = KU;
//window.onload = WOL;