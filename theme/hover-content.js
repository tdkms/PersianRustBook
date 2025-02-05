document.addEventListener('DOMContentLoaded', function() {
    const hoverContent = {
        'linker': {
            title: 'لینکر (Linker)',
            content: `لینکر یک برنامه سیستمی است که فایل‌های کامپایل شده را به هم متصل می‌کند.
                    این برنامه کدهای کامپایل شده از فایل‌های مختلف را گرفته و یک فایل اجرایی می‌سازد.`
        },
        'compiler-c': {
            title: 'کامپایلر C',
            content: `کامپایلر C برنامه‌ای است که کد C را به کد ماشین تبدیل می‌کند.
                    در Rust، این کامپایلر برای کامپایل کردن برخی از وابستگی‌های C مورد نیاز است.`
        },
        'rec-ide': {
            title: 'آی دی ای پیشنهادی',
            content: `چرت و پرت میگه این.<br>
             پیشنهاد میکنم از ای دی ای راست روور (RustRover) استفاده کنید در ادامه مسیر سردرد کمتری میگیرید...`
        },
        'همزمانی': {
            title: 'همزمانی (Concurrency)',
            content: `همزمانی در برنامه‌نویسی، توانایی اجرای چندین وظیفه در زمان واحد است. 
                    Rust با مکانیزم‌های قدرتمند مانند async/await و مالکیت (ownership) امکان نوشتن کد همزمان 
                    ایمن و کارآمد را فراهم می‌کند. این رویکرد به برنامه‌نویسان کمک می‌کند تا برنامه‌های 
                    چندنخی و غیر مسدود با کمترین خطا بنویسند.`
        },
        'macro': {
            title: 'Macro',
            content: `ماکرو در Rust یک کد ویژه است که قبل از کامپایل گسترش پیدا می‌کند. برخلاف توابع که فقط یک مقدار مشخص می‌گیرند، ماکروها می‌توانند ورودی‌های مختلفی داشته باشند و کد تولید کنند. مثلاً println! یک ماکرو است که متن را قالب‌بندی کرده و نمایش می‌دهد. فرق اصلی این است که ماکروها قبل از اجرا پردازش می‌شوند، اما توابع در زمان اجرا اجرا می‌شوند.`
        }
    };

    document.querySelectorAll('span[hover-key]').forEach(span => {
        const key = span.getAttribute('hover-key');
        span.className = 'hoverable';
        span.setAttribute('data-hover-key', key);
    });

    let currentDialog = null;
    let hideTimeout = null;

    document.addEventListener('mouseover', function(e) {
        const hoverable = e.target.closest('.hoverable');
        if (hoverable) {
            clearTimeout(hideTimeout);
            const key = hoverable.getAttribute('data-hover-key');
            const content = hoverContent[key];
            
            if (content) {
                if (currentDialog) {
                    currentDialog.remove();
                }

                const dialog = document.createElement('div');
                dialog.className = 'hover-dialog';
                dialog.dir = 'rtl'; // Force RTL
                dialog.innerHTML = `
                    <div class="hover-title">${content.title}</div>
                    <div class="hover-content">${content.content}</div>
                `;

                const rect = hoverable.getBoundingClientRect();
                dialog.style.top = `${rect.bottom + window.scrollY + 8}px`;
                dialog.style.left = `${rect.left + window.scrollX}px`;

                document.body.appendChild(dialog);
                requestAnimationFrame(() => dialog.classList.add('visible'));
                currentDialog = dialog;
            }
        }
    });

    document.addEventListener('mouseout', function(e) {
        const hoverable = e.target.closest('.hoverable');
        if (hoverable && currentDialog) {
            hideTimeout = setTimeout(() => {
                currentDialog.remove();
                currentDialog = null;
            }, 100);
        }
    });
});