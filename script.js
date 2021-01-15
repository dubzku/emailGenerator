$(function() {
    init();
})

init = () => {
    onSubmit();
    onReset();
    copyToClipboard();
}

onSubmit = () => {
    $('form').on('submit', (e) => {
        e.preventDefault();

        const $firstName = $('.firstName').val().toLowerCase()
        const $lastName = $('.lastName').val().toLowerCase()
        const $emailDomain = $('.emailDomain').val().toLowerCase()

        if ($firstName === "" || $lastName === "" || $emailDomain === "") {
            alert('All fields required!')
        } else {
            const firstNameLetter = $firstName.split('')[0]
            const lastNameLetter = $lastName.split('')[0]
            const firstNameCapital = firstNameLetter.toUpperCase() + $firstName.slice(1)
            const lastNameCapital = lastNameLetter.toUpperCase() + $lastName.slice(1)


            $('.resultsContainer').html(`
                <h2>${firstNameCapital} ${lastNameCapital}'s possible emails are:</h2>
                <ul>
                    <li><a href="mailto:${$firstName}@${$emailDomain}">${$firstName}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${$firstName}@${$emailDomain}"><i class="far fa-copy"></i></button></li>

                    <li><a href="mailto:${$firstName}${$lastName}@${$emailDomain}">${$firstName}${$lastName}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${$firstName}${$lastName}@${$emailDomain}"><i class="far fa-copy"></i></button></li>

                    <li><a href="mailto:${$firstName}.${$lastName}@${$emailDomain}">${$firstName}.${$lastName}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${$firstName}.${$lastName}@${$emailDomain}"><i class="far fa-copy"></i></button></li>

                    <li><a href="mailto:${$firstName}.${lastNameLetter}@${$emailDomain}">${$firstName}.${lastNameLetter}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${$firstName}.${lastNameLetter}@${$emailDomain}"><i class="far fa-copy"></i></button></li>

                    <li><a href="mailto:${$firstName}${lastNameLetter}@${$emailDomain}">${$firstName}${lastNameLetter}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${$firstName}${lastNameLetter}@${$emailDomain}"><i class="far fa-copy"></i></button></li>

                    <li><a href="mailto:${firstNameLetter}${$lastName}@${$emailDomain}">${firstNameLetter}${$lastName}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${firstNameLetter}${$lastName}@${$emailDomain}"><i class="far fa-copy"></i></button></li>

                    <li><a href="mailto:${firstNameLetter}.${$lastName}@${$emailDomain}">${firstNameLetter}.${$lastName}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${firstNameLetter}.${$lastName}@${$emailDomain}"><i class="far fa-copy"></i></button></li>

                    <li><a href="mailto:${$lastName}${$firstName}@${$emailDomain}">${$lastName}${$firstName}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${$lastName}${$firstName}@${$emailDomain}"><i class="far fa-copy"></i></button></li>

                    <li><a href="mailto:${$lastName}.${$firstName}@${$emailDomain}">${$lastName}.${$firstName}@${$emailDomain}</a><button class="clipboard" data-clipboard-text="${$lastName}.${$firstName}@${$emailDomain}"><i class="far fa-copy"></i></button></li>
                </ul>
            `)
        }
    })
}

onReset = () => {
    $('form').on('reset', () => {
        $('.resultsContainer').empty()
    })
}

copyToClipboard = () => {
    $('.clipboard').tooltip({
        trigger: 'click',
        placement: 'bottom'
    });

    setTooltip = (btn, message) => {
        btn.tooltip('hide')
            .attr('data-original-title', message)
            .tooltip('show');
    }

    hideTooltip = (btn) => {
        setTimeout(function() {
            btn.tooltip('hide');
        }, 1000);
    }

    let clipboard = new ClipboardJS('.clipboard');

    clipboard.on('success', function(e) {
        let btn = $(e.trigger);
        setTooltip(btn, 'Copied!');
        hideTooltip(btn);
    });
}