# nodejs-cheat-sheet
## Setup and Run

        node -v
        npm init -y   # create package.json
        node index.js # run file

## Working with JSON

      const data= {
        name: "Node",
        version: "18"
      };

      const str = JSON.stringify(data);
      const obj = JSON.parse(str);
