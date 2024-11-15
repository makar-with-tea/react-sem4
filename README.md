# Макаревич Мария, семинарское задание 4
Создайте мини-приложение "Список задач" (ToDo List). Оно должно состоять из нескольких компонентов, как функциональных, так и классовых. Приложение должно включать следующие возможности:
- Список задач. Отображайте список задач (циклический рендеринг) с возможностью добавления новых задач. Для каждой задачи используйте уникальный key.
- Добавление и удаление задач. Реализуйте функционал добавления новой задачи в список, используя состояние компонента. Для удаления задачи используйте условный рендеринг: при нажатии на кнопку "Удалить" задача исчезает из списка.
- Текущая и предыдущая задача. Используйте хук useRef для хранения предыдущего значения текущей задачи. Выведите текущую и предыдущую задачи в отдельном блоке.
- Стилизация. Стилизуйте ваше приложение, используя как инлайн-стили, так и внешние CSS-файлы. Например, выделите выполненные задачи, изменив их цвет через CSS-класс.
- Управление состоянием. Добавьте возможность пометить задачу как выполненную. Используйте метод изменения состояния в компонентах для обновления статуса задачи (например, через чекбокс).
- Подъём состояния. Организуйте управление задачами в родительском компоненте, который будет передавать состояние дочерним компонентам через props.
- Доступ к элементам DOM. Для поля ввода задачи используйте рефы (useRef), чтобы автоматически устанавливать фокус на поле после добавления новой задачи.
  
Требования к компонентам:
- Создайте как минимум один классовый компонент для управления состоянием списка задач.
- Используйте функциональные компоненты с хуками для управления состоянием и рендерингом отдельных элементов списка.
- Для всех циклов рендеринга обеспечьте использование атрибута key.
- Обязательно реализуйте возможность условного рендеринга для удаляемых задач и завершенных задач.
  
Дополнительные требования:
- Визуализируйте разницу между текущей и предыдущей задачей через хук useRef.
- Реализуйте компонент с инлайн-стилями и внешний CSS для остальных элементов интерфейса.
