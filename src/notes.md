### Overview:

    1. I'm using some new api for the `store/UI/cachign` -> longer time to create the app
    2. I took into account the time margin of 8h, consider some issue I got with the `store`
     2.1 normally this selector should do the job for getting the data, but for a reason I can't find in some short time, it didn't work in here
    src/store/selectors/recommendationSelector.ts
    so I've created a function

    3. I noted that for the main page the task is asking for a bit more details on the move, the will require a chain off call for each title => bit of the time, so I decided to go with the minimal

### Advanced task:

    1. it is quite vague of what you can implement
    2. I chose to implement a small selection algorithm based on the times a title was opened, not ideal data structure, but a sorted linked list would have took to much time to implement, went with a minimum
