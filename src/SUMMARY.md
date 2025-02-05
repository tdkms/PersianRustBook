## زبان برنامه‌نویسی راست (Rust)

[زبان برنامه‌نویسی راست](title-page.md)  
[مقدمه](foreword.md)  
[معرفی](ch00-00-introduction.md)

### شروع کار

- [شروع کار](ch01-00-getting-started.md)

  - [نصب](ch01-01-installation.md)
  - [برنامه "سلام دنیا!"](ch01-02-hello-world.md)
  - [آشنایی با Cargo](ch01-03-hello-cargo.md)

- [برنامه‌نویسی یک بازی حدس زدن](ch02-00-guessing-game-tutorial.md)

- [مفاهیم رایج برنامه‌نویسی](ch03-00-common-programming-concepts.md)

  - [متغیرها و تغییرپذیری](ch03-01-variables-and-mutability.md)
  - [انواع داده](ch03-02-data-types.md)
  - [توابع](ch03-03-how-functions-work.md)
  - [کامنت‌گذاری](ch03-04-comments.md)
  - [جریان کنترل (کنترل روند اجرا)](ch03-05-control-flow.md)

- [درک مالکیت در راست](ch04-00-understanding-ownership.md)

  - [مالکیت چیست؟](ch04-01-what-is-ownership.md)
  - [ارجاع‌ها و قرض گرفتن](ch04-02-references-and-borrowing.md)
  - [نوع Slice](ch04-03-slices.md)

- [استفاده از Structها برای ساختاردهی داده‌های مرتبط](ch05-00-structs.md)

  - [تعریف و مقداردهی Structها](ch05-01-defining-structs.md)
  - [یک مثال از استفاده از Structها](ch05-02-example-structs.md)
  - [نحوه نوشتن متدها](ch05-03-method-syntax.md)

- [Enums و الگوهای تطبیق](ch06-00-enums.md)
  - [تعریف یک Enum](ch06-01-defining-an-enum.md)
  - [ساختار `match` برای کنترل جریان](ch06-02-match.md)
  - [کنترل جریان کوتاه‌تر با `if let` و `let else`](ch06-03-if-let.md)

## مبانی راست

- [مدیریت پروژه‌های بزرگ با پکیج‌ها، کرات‌ها و ماژول‌ها](ch07-00-managing-growing-projects-with-packages-crates-and-modules.md)

  - [پکیج‌ها و کرات‌ها](ch07-01-packages-and-crates.md)
  - [تعریف ماژول‌ها برای کنترل محدوده و سطح دسترسی](ch07-02-defining-modules-to-control-scope-and-privacy.md)
  - [مسیرهای اشاره به یک آیتم در درخت ماژول](ch07-03-paths-for-referring-to-an-item-in-the-module-tree.md)
  - [وارد کردن مسیرها با کلمه کلیدی `use`](ch07-04-bringing-paths-into-scope-with-the-use-keyword.md)
  - [جداسازی ماژول‌ها در فایل‌های مختلف](ch07-05-separating-modules-into-different-files.md)

- [مجموعه‌های رایج داده](ch08-00-common-collections.md)

  - [ذخیره لیست مقادیر با وکتورها](ch08-01-vectors.md)
  - [ذخیره متن‌های UTF-8 با رشته‌ها](ch08-02-strings.md)
  - [ذخیره کلید و مقدار با Hash Map](ch08-03-hash-maps.md)

- [مدیریت خطاها](ch09-00-error-handling.md)

  - [خطاهای غیرقابل بازیابی با `panic!`](ch09-01-unrecoverable-errors-with-panic.md)
  - [خطاهای قابل بازیابی با `Result`](ch09-02-recoverable-errors-with-result.md)
  - [باید از `panic!` استفاده کنیم یا نه؟](ch09-03-to-panic-or-not-to-panic.md)

- [انواع عمومی، Traits و طول عمر](ch10-00-generics.md)

  - [انواع عمومی](ch10-01-syntax.md)
  - [Traits: تعریف رفتارهای مشترک](ch10-02-traits.md)
  - [مدیریت ارجاع‌ها با طول عمرها](ch10-03-lifetime-syntax.md)

- [نوشتن تست‌های خودکار](ch11-00-testing.md)

  - [چگونه تست بنویسیم](ch11-01-writing-tests.md)
  - [کنترل نحوه اجرای تست‌ها](ch11-02-running-tests.md)
  - [ساختاردهی به تست‌ها](ch11-03-test-organization.md)

- [یک پروژه I/O: ساخت یک برنامه خط فرمان](ch12-00-an-io-project.md)
  - [دریافت آرگومان‌های خط فرمان](ch12-01-accepting-command-line-arguments.md)
  - [خواندن از یک فایل](ch12-02-reading-a-file.md)
  - [بهبود ماژولار بودن و مدیریت خطاها](ch12-03-improving-error-handling-and-modularity.md)
  - [توسعه عملکرد کتابخانه با TDD](ch12-04-testing-the-librarys-functionality.md)
  - [کار با متغیرهای محیطی](ch12-05-working-with-environment-variables.md)
  - [نوشتن پیام‌های خطا در STDERR به جای STDOUT](ch12-06-writing-to-stderr-instead-of-stdout.md)

## تفکر به سبک راست

- [ویژگی‌های زبان‌های تابعی: Closureها و Iteratorها](ch13-00-functional-features.md)

  - [Closureها: توابع ناشناس که محیط خود را ذخیره می‌کنند](ch13-01-closures.md)
  - [پردازش مجموعه‌ای از آیتم‌ها با Iteratorها](ch13-02-iterators.md)
  - [بهبود پروژه I/O](ch13-03-improving-our-io-project.md)
  - [مقایسه کارایی: حلقه‌ها در برابر Iteratorها](ch13-04-performance.md)

- [مدیریت همزمانی بدون ترس](ch16-00-concurrency.md)
  - [اجرای همزمان کد با Threadها](ch16-01-threads.md)
  - [ارسال پیام بین Threadها](ch16-02-message-passing.md)
  - [همزمانی با استفاده از اشتراک حافظه](ch16-03-shared-state.md)
  - [گسترش همزمانی با `Sync` و `Send`](ch16-04-extensible-concurrency-sync-and-send.md)

## موضوعات پیشرفته

- [الگوها و تطبیق](ch19-00-patterns.md)

  - [همه جاهایی که می‌توان از الگوها استفاده کرد](ch19-01-all-the-places-for-patterns.md)
  - [Refutability: آیا یک الگو ممکن است مطابقت نداشته باشد؟](ch19-02-refutability.md)
  - [قواعد نوشتاری الگوها](ch19-03-pattern-syntax.md)

- [ویژگی‌های پیشرفته](ch20-00-advanced-features.md)

  - [راست Unsafe](ch20-01-unsafe-rust.md)
  - [Traits پیشرفته](ch20-03-advanced-traits.md)
  - [انواع پیشرفته](ch20-04-advanced-types.md)
  - [توابع و Closureهای پیشرفته](ch20-05-advanced-functions-and-closures.md)
  - [ماکروها](ch20-06-macros.md)

- [پروژه نهایی: ساخت یک سرور وب چندنخی](ch21-00-final-project-a-web-server.md)
  - [ساخت یک سرور تک‌نخی](ch21-01-single-threaded.md)
  - [تبدیل سرور تک‌نخی به چندنخی](ch21-02-multithreaded.md)
  - [خاموش کردن و پاکسازی صحیح](ch21-03-graceful-shutdown-and-cleanup.md)
