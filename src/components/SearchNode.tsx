import React from 'react';

const SearchNode = () => {
    const data = {
        "key": "1",
        "value": {
            "id": "150",
            "code": "p",
            "name": "Parent / Node",
            "parent_id": null,
            "url": "parent-url",
            "children": [
                {
                    "id": "151",
                    "code": "A",
                    "name": "A",
                    "parent_id": "150",
                    "url": "a-test"
                },
                {
                    "id": "152",
                    "code": "B",
                    "name": "B",
                    "parent_id": "150",
                    "url": "b-test"
                },
                {
                    "id": "153",
                    "code": "Comm",
                    "name": "Comm",
                    "parent_id": "150",
                    "url": "c-test",
                    "children": [
                        {
                            "id": "154",
                            "code": "c_code",
                            "name": "comm Code",
                            "parent_id": "153",
                            "url": "comm-codes"
                        },
                        {
                            "id": "155",
                            "code": "forms_c",
                            "name": "Forms Code",
                            "parent_id": "153",
                            "url": "form-cod",
                            "children": [
                                {
                                    "id": "156",
                                    "code": "test UME",
                                    "name": "Test  Menu",
                                    "parent_id": "155",
                                    "url": "test-menu"
                                },
                                {
                                    "id": "159321",
                                    "code": "test UME",
                                    "name": "Test  Menu",
                                    "parent_id": "155",
                                    "url": "test-menu"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };

    const search = (id: unknown, currentNode: object) => {
        let result: any;

        for (const [key, value] of Object.entries(currentNode)) {
            if (key === "id" && value === id) return currentNode;
            if (value !== null && typeof value === "object") {
                result = search(id, value);
                if (result) {
                    return result;
                }
            }
        }
    }


    console.log(search('150', data))

    return (
        <div>

        </div>
    );
};

export default SearchNode;